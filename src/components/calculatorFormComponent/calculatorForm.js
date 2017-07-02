import React, { Component } from 'react';

class CalculatorForm extends Component {
  render() {
    return (
    <div className="btn-toolbar calculator-form">
        <label className="form-labels">Months<sup>*</sup></label>
        <div className="box">
            <div className="select-side">
                <i className="glyphicon glyphicon-triangle-top"></i>
                <i className="glyphicon glyphicon-triangle-bottom"></i>
            </div>
            <select className="form-control ">
                <option>Choose an option...</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    
        <button type="button" className="btn btn-calculate">Calculate</button>

        <label className="form-labels label-total">Total</label>

        <input type="text" className="form-control input-total" placeholder="R$ 00,00" readOnly="readonly"/>

        <button type="button" className="btn btn-quot">Get Quot</button>
    
        
        
        

    </div>

    
    


    );
  }
}

export default CalculatorForm;