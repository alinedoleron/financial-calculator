import React, { Component } from 'react';

//components
import Calculator from '../calculatorComponent/calculator';
import CalculatorForm from '../calculatorFormComponent/calculatorForm';

//TODO Criar Form calculator
class FormContainer extends Component {
  render() {
    return (
      <div className="container_form">
        <Calculator></Calculator>
        <CalculatorForm></CalculatorForm>
        
      </div>
    );
  }
}

export default FormContainer;