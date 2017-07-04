import React, { Component } from 'react';

class CalculatorForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectValue: "Choose an option..."
        };
        console.log("Estou no form calc "  + this.props.initialValue);
    }

    change = (event) => {
        console.log(event.target.value);
        console.log(this.props.initialValue);
    }
    
    render() {
        return (
        <div className="btn-toolbar calculator-form">
            <label className="form-labels">Months<sup>*</sup></label>
            <div className="box">
                <div className="select-side">
                    <i className="glyphicon glyphicon-triangle-top"></i>
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                </div>
                <select className="form-control" onChange={this.change} defaultValue={this.state.selectValue}>
                    <option value="default">{this.state.selectValue}</option>
                    <option value="24_7">24 months with a rate of 7% per mo.</option>
                    <option value="36_9">36 months with a rate of 9% per mo.</option>
                    <option value="48_15">48 months with a rate of 15% per mo.</option>
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