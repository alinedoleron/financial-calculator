import React, { Component } from 'react';

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            exp: "",
            clear: false,
            error: "",
            displayError: false
        }; 
    }
    
    clickEqual = (updateState = false) => {
        let nextState = {};
        try {
            if(this.state.exp !== "") {
                var value = eval(this.state.exp);
                nextState = {exp: value, 
                    clear: true, 
                    displayError: false, 
                    error: ""
                    };
            }
            
        } catch (error) {
            var msg = error.message;
            nextState = {displayError: true, error: msg};
        }
        if(updateState) {
            this.setState(nextState);
        }
        this.props.callbackFromParent(nextState['exp']);
        return nextState;
    }

    isOperator(str) {
        return (str === "+" || str === "-" || str === "*" || str === "/");
    }

    isNumber (str)  {
        return Number.isInteger(parseInt(str, 10));
    }
    
    isControl (str) {
        return (str === "<" || str === "C" || str === "=");
    }

    clearState() {
        return {exp: "", clear: false};
    }

    handleClick = (e) => {
        if(e.target.tagName === "BUTTON" || e.target.tagName === "SPAN") {
            let nextState = this.state;
            if(this.isControl(e.target.textContent)) {
                if(e.target.textContent === "<") {
                    var strwithLastCharRemoved = this.state.exp.substring(0, this.state.exp.length - 1);
                    if(strwithLastCharRemoved === "") {
                        nextState['displayError'] = false;
                        nextState['error'] = "";
                    }
                    nextState = {exp: strwithLastCharRemoved};
                    
                } else if(e.target.textContent === "C") {
                    nextState = this.clearState();
                    this.props.callbackFromParent(0);
                } else { // equal was pressed
                    nextState = this.clickEqual();
                }
            } else {

                if((this.isNumber(e.target.textContent) || e.target.textContent === "." || e.target.textContent === "(")  && this.state.clear) {
                    nextState = this.clearState();
                }

                if(nextState.exp.slice(-1) === "." && e.target.textContent === ".") {
                    return;
                }

                if(this.isOperator(e.target.textContent) ||  e.target.textContent === ")") {
                    let lastCharacter = nextState.exp.slice(-1);
                    if(this.isOperator(lastCharacter) 
                        || lastCharacter === "" || lastCharacter === "(") {
                            return;
                    } else {
                        nextState["clear"] = false;
                    }
                }

                if(e.target.textContent === ")" && nextState["exp"].indexOf("(") === -1) {
                    return;
                }
                let concat = nextState.exp + e.target.textContent;
                nextState["exp"] = concat;
            }
        this.setState(nextState);
        }

    }

    render() {
    return (
    <div className="btn-toolbar calculator" role="toolbar" aria-label="Toolbar with button groups">
            <p className={(this.state.displayError ? "help-block" : "hideError")}>{this.state.error}</p>
            <input type="text" className="form-control input-visor" readOnly="readonly" value={this.state.exp}/>
            
            <div onClick={this.handleClick}>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc first-corner-top"><span id="clearBack" className="btn-text">{this.state.clear ? 'C' : '<'}</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor"><span className="btn-text">(</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor last last-corner-top"><span className="btn-text">)</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc btn-visor first-middle" ><span className="btn-text">1</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor "><span className="btn-text">2</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor  last last-middle"><span className="btn-text">3</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc btn-visor  first-middle"><span className="btn-text">4</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor"><span className="btn-text">5</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor last last-middle"><span className="btn-text">6</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc btn-visor first-middle"><span className="btn-text">7</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor"><span className="btn-text">8</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor  last last-middle"><span className="btn-text">9</span></button> 
                </div>
                <div className="btn-group calc-line" role="group"> 
                    <button type="button" className="btn btn-default btn-calc btn-visor btn-zero first-corner-bottom"><span className="btn-text">0</span></button> 
                    <button type="button" className="btn btn-default btn-calc btn-visor last last-corner-bottom"><span className="btn-text dot">.</span></button>
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