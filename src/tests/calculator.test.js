import React from 'react';
import {mount} from 'enzyme';
import Calculator from '../components/calculatorComponent/calculator';

test('should render a character(number, dot or parenthesis) when it was clicked', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);
    
    let button = calculator.find('.btn-visor').first();
    let val = button.text();

    button.simulate('click');

    expect(calculator.find('.input-visor').props().value).toEqual(val);
});

test('should not allow a signal before a number', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);

    let buttonOperator = calculator.find('.btn-signal').first();
    let buttonNumber = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '2');
    let valOperator = buttonOperator.text();
    let valNumber = buttonNumber.text();

    buttonOperator.simulate('click');
    buttonNumber.simulate('click');
    
    expect(calculator.find('.input-visor').props().value).toEqual(valNumber);
});

test('should not allow a sequence of signal operators', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);

    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '2');
    let buttonOperator = calculator.find('.btn-signal').first();
    let buttonNumberB = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '3');
    let valOperator = buttonOperator.text();
    let valNumberA = buttonNumberA.text();
    let valNumberB = buttonNumberB.text();

    buttonNumberA.simulate('click');
    buttonOperator.simulate('click');
    buttonOperator.simulate('click');
    buttonNumberB.simulate('click');
    
    expect(calculator.find('.input-visor').props().value)
    .toEqual(buttonNumberA.text()+buttonOperator.text()+buttonNumberB.text());
});

test('should show the result of an arithmetic operation when = is pressed', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);

    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '4');
    let buttonOperator = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '+');
    let buttonNumberB = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '3');
    let buttonEqual = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '=');
    let valOperator = buttonOperator.text();
    let valNumberA = buttonNumberA.text();
    let valNumberB = buttonNumberB.text();

    buttonNumberA.simulate('click');
    buttonOperator.simulate('click');
    buttonNumberB.simulate('click');
    buttonEqual.simulate('click');

    expect(calculator.find('.input-visor').props().value).toEqual(7);
});

test('should show the C button after executing an arithmetic operation when = is pressed', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);

    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '4');
    let buttonOperator = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '+');
    let buttonNumberB = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '3');
    let buttonEqual = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '=');
    let valOperator = buttonOperator.text();
    let valNumberA = buttonNumberA.text();
    let valNumberB = buttonNumberB.text();

    buttonNumberA.simulate('click');
    buttonOperator.simulate('click');
    buttonNumberB.simulate('click');
    buttonEqual.simulate('click');

    expect(calculator.find('.first-corner-top').text()).toEqual("C");
});


test('should remove the last character when < is pressed', () => {
    const calculator = mount(<Calculator callbackFromParent={() => {}} />);

    let buttonNumberA = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '4');
    let buttonOperator = calculator.findWhere((n) => n.hasClass('btn-signal') && n.text() == '+');
    let buttonNumberB = calculator.findWhere((n) => n.hasClass('btn-visor') && n.text() == '3');
    let buttonBack = calculator.findWhere((n) => n.hasClass('first-corner-top') && n.text() == '<');
    let valOperator = buttonOperator.text();
    let valNumberA = buttonNumberA.text();
    let valNumberB = buttonNumberB.text();

    buttonNumberA.simulate('click');
    buttonOperator.simulate('click');
    buttonNumberB.simulate('click');
    buttonBack.simulate('click');

    expect(calculator.find('.input-visor').props().value).toEqual("4+");
});