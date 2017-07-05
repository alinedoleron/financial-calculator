import React, { Component } from 'react';

class CalculatorForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            months: 0,
            interest: 0,
            totalDebt: "R$ 0,00"
        };
    }

    change = (e) => {
        console.log(e.target.value);
        console.log(this.props.initialValue);
        var [mo, tx] = e.target.value.split("_");
        mo = parseInt(mo, 10);
        tx = parseInt(tx, 10);
        this.setState({selectedValue:e.target.value, months: mo, interest: tx}, ()=>console.log(this.state));
    }

    calculate = () => {
        //https://www3.bcb.gov.br/CALCIDADAO/publico/exibirMetodologiaFinanciamentoPrestacoesFixas.do?method=exibirMetodologiaFinanciamentoPrestacoesFixas
        if(this.state.selectedValue !== "") {
            let tx = this.state.interest/100;
            var total = this.props.initialValue * tx * this.state.months / (1-Math.pow(1+tx, -(this.state.months)));
            total = new Intl.NumberFormat('latn', { style: 'currency', currency: 'BRL' }).format(total);
            total = (total.substring(0,2) + " " + total.substring(2,total.length));
            this.setState({totalDebt: total}, ()=>console.log(this.state));
        }
        
    }

    handleSubmit = (e) => {
        let objJson = {
            'interest': this.state.interest,
            'loan': this.props.initialValue,
            'numberOfMonths': this.state.months,
            'totalDebt': this.state.totalDebt
        }

        console.log(JSON.stringify(objJson));

        fetch("http://192.168.25.25:5000/test", {
                method: "POST",
                body: JSON.stringify(objJson)
            }).then( (d) => {
                console.log(d);
            }).catch( (cc) => {
                console.log(cc);
            });
        
        e.preventDefault();

    }
    
    render() {
        return (
        <div className="btn-toolbar calculator-form">
            <form onSubmit={this.handleSubmit}>
                <label className="form-labels">Months<sup>*</sup></label>
                <div className="box">
                    <div className="select-side">
                        <i className="glyphicon glyphicon-triangle-top"></i>
                        <i className="glyphicon glyphicon-triangle-bottom"></i>
                    </div>
                    <select className="form-control" onChange={this.change}>
                        <option value="default">Choose an option...</option>
                        <option value="24_7">24 months with a rate of 7% per mo.</option>
                        <option value="36_9">36 months with a rate of 9% per mo.</option>
                        <option value="48_15">48 months with a rate of 15% per mo.</option>
                    </select>
                </div>
            
                <button type="button" className="btn btn-calculate" onClick={this.calculate}>Calculate</button>

                <label className="form-labels label-total">Total</label>

                <input type="text" className="form-control input-total" placeholder="R$ 00,00" value={this.state.totalDebt} readOnly="readonly"/>

                <button type="submit" className="btn btn-quot">Get Quot</button>
            </form>
        
        </div>

    );
  }
}

export default CalculatorForm;