import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
    <div className="btn-toolbar calculator" role="toolbar" aria-label="Toolbar with button groups">
            
            <input type="text" className="form-control input-visor" readOnly="readonly"/>
            
            <div className="btn-group calc-line" role="group"> 
                <button type="button" className="btn btn-default btn-calc first-corner-top"><div className="btn-text">&lt;</div></button> 
                <button type="button" className="btn btn-default btn-calc"><div className="btn-text">(</div></button> 
                <button type="button" className="btn btn-default btn-calc last last-corner-top"><div className="btn-text">)</div></button> 
            </div>
            <div className="btn-group calc-line" role="group"> 
                <button type="button" className="btn btn-default btn-calc first-middle"><div className="btn-text">1</div></button> 
                <button type="button" className="btn btn-default btn-calc"><div className="btn-text">2</div></button> 
                <button type="button" className="btn btn-default btn-calc last last-middle"><div className="btn-text">3</div></button> 
            </div>
            <div className="btn-group calc-line" role="group"> 
                <button type="button" className="btn btn-default btn-calc first-middle"><div className="btn-text">4</div></button> 
                <button type="button" className="btn btn-default btn-calc"><div className="btn-text">5</div></button> 
                <button type="button" className="btn btn-default btn-calc last last-middle"><div className="btn-text">6</div></button> 
            </div>
            <div className="btn-group calc-line" role="group"> 
                <button type="button" className="btn btn-default btn-calc first-middle"><div className="btn-text">7</div></button> 
                <button type="button" className="btn btn-default btn-calc"><div className="btn-text">8</div></button> 
                <button type="button" className="btn btn-default btn-calc last last-middle"><div className="btn-text">9</div></button> 
            </div>
            <div className="btn-group calc-line" role="group"> 
                <button type="button" className="btn btn-default btn-calc btn-zero first-corner-bottom"><div className="btn-text">0</div></button> 
                <button type="button" className="btn btn-default btn-calc last last-corner-bottom"><div className="btn-text dot">.</div></button>
            </div>


            <div className="btn-group-vertical btn-signals" role="group"> 
                <button type="button" className="btn btn-default btn-signal"><div className="btn-text">+</div></button> 
                <button type="button" className="btn btn-default btn-signal"><div className="btn-text">-</div></button> 
                <button type="button" className="btn btn-default btn-signal"><div className="btn-text">*</div></button> 
                <button type="button" className="btn btn-default btn-signal"><div className="btn-text">/</div></button>
                <button type="button" className="btn btn-default btn-signal"><div className="btn-text">=</div></button>
            </div>


    </div>
    


    );
  }
}

export default Calculator;