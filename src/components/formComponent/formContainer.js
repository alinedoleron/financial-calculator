import React, { Component } from 'react';

//components
import Calculator from '../calculatorComponent/calculator';
import CalculatorForm from '../calculatorFormComponent/calculatorForm';


class FormContainer extends Component {
    constructor() {
      super();
      this.state = {
        loan: 0,
        msg: ""
      }

    }
    setLoan = (exp) => {

        this.setState({loan: exp});
    }

    sendMsg = (message) => {
      this.setState({msg: message});
    }

  render() {
    return (
      <div className="container_form">
        <Calculator ref="calc" sendInputVisorToParent={this.setLoan}></Calculator>
        <CalculatorForm initialValue={this.state.loan} equalMethod={() => this.refs.calc.clickEqual(true)}></CalculatorForm>
        
      </div>
    );
  }
}

export default FormContainer;