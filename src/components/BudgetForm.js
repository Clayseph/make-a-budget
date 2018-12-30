import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import CategoryInput from './CategoryInput';

export default class BudgetForm extends Component {
    constructor(){
        super()
        this.state = {
            budget:{}
        } 
    }
    
    addCategory = () => {
        const key = this.state.category;
        const value = this.state.categoryValue;
        let budget = this.state.budget;
        budget = {...budget, [key] : value };
        this.setState({ budget })
    }

    formatIncomeData = () => {
        let budget = this.state.budget;
        let income = this.state.income;
        let leftOverIncome = income;
        //needed for initial chart setup
        let data = [['Category','Percent of Income']];
        Object.keys(budget).forEach(function(key, index) {
            var value = budget[key];
            leftOverIncome -= value;
            const category = [`${key}`, value];
            data.push(category);
        });
        data.push(['Remaining Income', leftOverIncome])

        // this.setState({ chartBudget: data })
        this.props.updateBudget(data);
    }

    handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        const budget = {...this.state.budget, [event.target.name] : value };
        this.setState({ budget });
      }

    handleCategoryChange = (event) =>{
        this.setState({[event.target.name] : event.target.value });
    }
    
    handleCategoryValueChange = (event) =>{
        const value = parseInt(event.target.value);
        this.setState({[event.target.name] : value });
    }

    handleIncomeInput = (event) =>{
        const income = parseInt(event.target.value);
        this.setState({income})
    }

  render() {
    return (
            <div className="form">
                <FormControl className="formControl">
                    <InputLabel htmlFor="component-simple">Monthly Income</InputLabel>
                    <Input id="component-simple" name="income" value={this.state.income ? this.state.income : ''} onChange={this.handleIncomeInput} />
                </FormControl>
                <FormControl className="formControl">
                    <InputLabel htmlFor="component-simple">Monthly Rent</InputLabel>
                    <Input id="component-simple" name="rent" value={this.state.budget.rent ? this.state.budget.rent : ''} onChange={this.handleBudgetChange} />
                </FormControl>
                <CategoryInput 
                    addAction={this.addCategory}
                    amount={this.state.categoryValue} 
                    category={this.state.category} 
                    onAmountChange={this.handleCategoryValueChange}
                    onCategoryChange={this.handleCategoryChange}/> 
                <Button onClick={this.formatIncomeData} className="submit" variant="contained" color="primary">Submit</Button>
            </div>
    );
  }
}
