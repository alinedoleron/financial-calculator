import React, { Component } from 'react';

//components
import Calculator from '../calculatorComponent/calculator';
import CalculatorForm from '../calculatorFormComponent/calculatorForm';

//TODO Criar Form calculator
class FormContainer extends Component {
    constructor() {
      super();
      this.state = {
        loan: 0
      }

    }
    setLoan = (exp) => {
        this.setState({loan: exp});
    }

  render() {
    return (
      <div className="container_form">
        <Calculator ref="calc" callbackFromParent={this.setLoan}></Calculator>
        <CalculatorForm initialValue={this.state.loan} equalMethod={() => this.refs.calc.clickEqual(true)}></CalculatorForm>
        
      </div>
    );
  }
}

export default FormContainer;