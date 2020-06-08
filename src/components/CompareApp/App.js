import React, {Component} from 'react';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../../styles/styles.css";
import ValueForm from "./ValueForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountToInvest: '',
            stockPercentage: ''
        }
    }

    handleAmountInput = (event) => {
        const regExp = /^[0-9\b]+$/;
        if (event.target.value === '' || regExp.test(event.target.value)) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };

    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h2 className="App-title">Compare Stocks for a Mutual fund</h2>
                </header>
                <div className="App-intro">
                    <ValueForm amountToInvest={this.state.amountToInvest} label={"Amount to invest:"}
                               name={"amountToInvest"}
                               placeholder={"Enter the Amount"} handleChange={this.handleAmountInput}/>
                    <ValueForm amountToInvest={this.state.stockPercentage} label={"Percentage of stock:"}
                               name={"stockPercentage"}
                               placeholder={"Enter the Percentage of stock"} handleChange={this.handleAmountInput}/>
                </div>
            </div>
        )
    }
}

export default App;