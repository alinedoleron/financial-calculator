import React, { Component } from 'react';
var mexp = require('math-expression-evaluator');


class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            exp: "",
            equalPressed: false
        }; 
    }
    

    handleClick = (e) => {
        console.log(e.target);
        if (e.target.innerText === "<") {
            var strwithLastCharRemoved = this.state.exp.substring(0, this.state.exp.length - 1);
            this.setState({exp: strwithLastCharRemoved});
        } else if(e.target.innerText !== "=" && !this.state.equalPressed) {
            var concatExp = this.state.exp + e.target.innerText;
            this.setState({exp: concatExp});
        } else if(e.target.innerText !== "=" && this.state.equalPressed) {
            this.setState({exp: ""});
            var concatExp = e.target.innerText;
            this.setState({exp: concatExp});
            this.setState({equalPressed: false});
            console.log("if 2: " + this.state.equalPressed);
        } else {
            try {
                this.setState({equalPressed: true});
                var value = eval(this.state.exp);
                this.setState({exp: value});
                console.log(value);
            } catch (error) {
                console.log(error);
            }
        }

        
    }

    render() {
    return (
    <div className="btn-toolbar calculator" role="toolbar" aria-label="Toolbar with button groups">
            
            <input type="text" className="form-control input-visor" readOnly="readonly" value={this.state.exp}/>
            
            <div onClick={this.handleClick}>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc first-corner-top"><span className="btn-text">&lt;</span></button> 
                    <button type="button" className="btn btn-default btn-calc"><span className="btn-text">(</span></button> 
                    <button type="button" className="btn btn-default btn-calc last last-corner-top"><span className="btn-text">)</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc first-middle" ><span className="btn-text">1</span></button> 
                    <button type="button" className="btn btn-default btn-calc"><span className="btn-text">2</span></button> 
                    <button type="button" className="btn btn-default btn-calc last last-middle"><span className="btn-text">3</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc first-middle"><span className="btn-text">4</span></button> 
                    <button type="button" className="btn btn-default btn-calc"><span className="btn-text">5</span></button> 
                    <button type="button" className="btn btn-default btn-calc last last-middle"><span className="btn-text">6</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc first-middle"><span className="btn-text">7</span></button> 
                    <button type="button" className="btn btn-default btn-calc"><span className="btn-text">8</span></button> 
                    <button type="button" className="btn btn-default btn-calc last last-middle"><span className="btn-text">9</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc btn-zero first-corner-bottom"><span className="btn-text">0</span></button> 
                    <button type="button" className="btn btn-default btn-calc last last-corner-bottom"><span className="btn-text dot">.</span></button>
                </div>


                <div className="btn-group-vertical btn-signals" role="group"> 
                    <button type="button" className="btn btn-default btn-signal"><span className="btn-text">+</span></button> 
                    <button type="button" className="btn btn-default btn-signal"><span className="btn-text">-</span></button> 
                    <button type="button" className="btn btn-default btn-signal"><span className="btn-text">*</span></button> 
                    <button type="button" className="btn btn-default btn-signal"><span className="btn-text">/</span></button>
                    <button type="button" className="btn btn-default btn-signal"><span className="btn-text">=</span></button>
                </div>
        </div>
    </div>
    


    );
  }
}

export default Calculator;