import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import CategoryInput from './CategoryInput';
import InputWrapper from './InputWrapper';

export default class BudgetForm extends Component {
    constructor(){
        super()
        this.state = {
            budget:{},
            categories:[]
        } 
    }
    
    addCategory = () => {
        const key = this.state.category;
        const value = this.state.categoryValue;
        let budget = this.state.budget;
        budget = {...budget, [key] : value };
        let categories = this.state.categories;
        categories.push({ name: key })
        this.setState({ 
            budget,
            category:'',
            categoryValue:''
         });
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

    renderDynamicInputs(){
        let components=[];
        this.state.categories.forEach((category, index)=>{
            components.push(
                <InputWrapper 
                    key={ index }
                    name={ category.name } 
                    onChange={ this.handleBudgetChange }
                    title={ category.name } 
                    value={ this.state.budget[category.name] ? this.state.budget[category.name] : '' } 
                    />
            );
        });
        //To ensure the last input is always a blank Category 
        components.push(
            <CategoryInput 
                    key={'category'}
                    addAction={this.addCategory}
                    amount={this.state.categoryValue} 
                    category={this.state.category} 
                    onAmountChange={this.handleCategoryValueChange}
                    onCategoryChange={this.handleCategoryChange}
                /> 
        );
        return components;
    }

    

  render() {
    return (
            <div className="form">
                <InputWrapper 
                    name={'income'} 
                    onChange={this.handleIncomeInput}
                    title={'Monthly Income'} 
                    value={this.state.income ? this.state.income : ''} 
                    />
                <InputWrapper 
                    name={'Rent'} 
                    onChange={this.handleBudgetChange}
                    title={'Monthly Rent'} 
                    value={this.state.budget.Rent ? this.state.budget.Rent : ''} 
                    />
                { this.renderDynamicInputs() }
                <Button onClick={this.formatIncomeData} className="submit" variant="contained" color="primary">Submit</Button>
            </div>
    );
  }
}
