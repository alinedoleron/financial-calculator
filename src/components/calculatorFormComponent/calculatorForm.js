import React, { Component } from 'react';

class CalculatorForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            selectedDefault: "Choose an option...",
            months: 0,
            interest: 0,
            totalDebt: ""
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            let total = "";
            let cleanSelect, msgSelect;
            if(nextProps.initialValue && this.state.selectedValue) {
                let tx = this.state.interest/100;
                total = nextProps.initialValue * tx * this.state.months / (1-Math.pow(1+tx, -(this.state.months)));
                total = new Intl.NumberFormat('latn', { style: 'currency', currency: 'BRL' }).format(total);
                total = (total.substring(0,2) + " " + total.substring(2,total.length));
            }

            if(nextProps.initialValue === 0) {
                cleanSelect = "";
                msgSelect = "Choose an option...";
                this.setState({totalDebt: total, selectedValue: cleanSelect, selectedDefault: msgSelect});
            } else {
                 this.setState({totalDebt: total});
            }
            
         }

    
    }
    calculate = () => {
        //Fonte: https://www3.bcb.gov.br/CALCIDADAO/publico/exibirMetodologiaFinanciamentoPrestacoesFixas.do?method=exibirMetodologiaFinanciamentoPrestacoesFixas

        if(this.state.selectedValue !== "") {
            this.props.equalMethod();
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

    getValue = (e) => {
        if((e.target.tagName) === 'LI') {
            let data_month =  e.target.getAttribute("data-month");
            let [mo, tx] = data_month.split("_");
            mo = parseInt(mo, 10);
            tx = parseInt(tx, 10);
            this.setState({selectedDefault: e.target.textContent, selectedValue:data_month, months: mo, interest: tx});
        }
    }
    
    render() {
        return (
        <div className="btn-toolbar calculator-form">
            <form onSubmit={this.handleSubmit}>
                <label className="form-labels">Months<sup>*</sup></label>   
                
                <div className="dropdown">
                <div className="btn-block">
                    <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {this.state.selectedDefault}
                        <div className="select-side">
                            <span className="glyphicon glyphicon-triangle-top"></span>
                            <span className="glyphicon glyphicon-triangle-bottom"></span>
                        </div>
                    </button>
                    <ul className="dropdown-menu btn-options" aria-labelledby="dropdownMenu1" onClick={this.getValue}>
                        <li className="btn-option" data-month="">Choose an option...</li>
                        <li role="separator" className="divider"></li>
                        <li className="btn-option" data-month="24_7">24 months with a rate of 7% per mo.</li>
                        <li className="btn-option" data-month="36_9">36 months with a rate of 9% per mo.</li>
                        <li className="btn-option" data-month="48_15">48 months with a rate of 15% per mo.</li>
                    </ul>
                </div>
                </div>

 
            
                <button type="button" className="btn btn-calculate" onClick={this.calculate} disabled={!this.state.selectedValue}>Calculate</button>

                <label className="form-labels label-total">Total</label>

                <input type="text" className="form-control input-total" placeholder="R$ 0,00" value={this.state.totalDebt} readOnly="readonly"/>

                <button type="submit" className="btn btn-quot" disabled={!this.state.totalDebt}>Get Quot</button>
            </form>
        
        </div>

    );
  }
}

export default CalculatorForm;