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
    getLoan = (exp) => {
        this.setState({loan: exp});
    }

  render() {
    return (
      <div className="container_form">
        <Calculator callbackFromParent={this.getLoan}></Calculator>
        <CalculatorForm initialValue={this.state.loan}></CalculatorForm>
        
      </div>
    );
  }
}

export default FormContainer;