import React from 'react';
import {mount} from 'enzyme';
import CalculatorForm from '../components/calculatorFormComponent/calculatorForm';
import Calculator from '../components/calculatorComponent/calculator';
import FormContainer from '../components/formComponent/formContainer';

test('should disable "GETQUOT" button if input total equals to R$0,00', () => {
    const calculatorForm = mount(<CalculatorForm initialValue={() => {}} />);

    let inputTotal = calculatorForm.find('.input-total').props().value;
    console.log(inputTotal);
    expect(calculatorForm.find('.btn-quot').props().disabled).toEqual(true);
});

test('should enable "GETQUOT" button if input total is different from R$0,00', () => {
    const formContainer = mount(<FormContainer />);
    let calculator = formContainer.find(Calculator);
    let calculatorForm = formContainer.find(CalculatorForm);
    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '2');
    let buttonDrop = calculatorForm.find('#dropdownMenu1');
    let liOption =  calculatorForm.findWhere((n) => n.hasClass('btn-option') && n.prop('data-month') != "").first();
    let inputTotal = calculatorForm.find('.input-total').props().value;
    let buttonCalculate = calculatorForm.find('.btn-calculate');

    
    buttonNumberA.simulate('click');
    buttonDrop.simulate('click');
    liOption.simulate('click');
    buttonCalculate.simulate('click');
    
    expect(calculatorForm.find('.btn-quot').props().disabled).toEqual(false);
});

test('should disable "CALCULATE" button if input calculator and select are "" ', () => {
    const formContainer = mount(<FormContainer />);
    let calculatorForm = formContainer.find(CalculatorForm);
  
    expect(calculatorForm.find('.btn-calculate').props().disabled).toEqual(true);
});


test('should enable "CALCULATE" button if input calculator and select is different from "" ', () => {
    const formContainer = mount(<FormContainer />);
    let calculator = formContainer.find(Calculator);
    let calculatorForm = formContainer.find(CalculatorForm);
    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '2');
    let buttonDrop = calculatorForm.find('#dropdownMenu1');
    let liOption =  calculatorForm.findWhere((n) => n.hasClass('btn-option') && n.prop('data-month') != "").first();
    let inputTotal = calculatorForm.find('.input-total').props().value;

    buttonNumberA.simulate('click'); 
    buttonDrop.simulate('click');
    liOption.simulate('click');
  
    expect(calculatorForm.find('.btn-calculate').props().disabled).toEqual(false);
});


/*
test('should clear "total" input when C button is pressed ', () => {
    const formContainer = mount(<FormContainer />);
    let calculator = formContainer.find(Calculator);
    let calculatorForm = formContainer.find(CalculatorForm);
    
    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '4');
    let buttonDrop = calculatorForm.find('#dropdownMenu1');
    let liOption =  calculatorForm.findWhere((n) => n.hasClass('btn-option') && n.prop('data-month') != "").first();
    let buttonEqual = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '=');
    let buttonClear = calculator.find('.first-corner-top');
    let buttonCalculate = calculatorForm.find('.btn-calculate');

    buttonNumberA.simulate('click');
    buttonEqual.simulate('click');
    buttonDrop.simulate('click');
    liOption.simulate('click');   
    buttonCalculate.simulate('click');
    buttonClear.simulate('click');
    

    expect(calculatorForm.find('.input-total').props().value).toEqual("R$  0.00");
});
*/



    