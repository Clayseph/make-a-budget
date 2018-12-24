import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { budget } from '../resources/testBudget';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import './Main.css';


export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            budget:{}
        }
    }

    handleChange = (event) => {
        const value = parseInt(event.target.value);
        const budget = {...this.state.budget, [event.target.name] : value };
        this.setState({ budget });
      }
    addCategory = () => {

    }

    formatIncomeData = () => {
        let budget = this.state.budget;
        //needed for initial chart setup
        let data = [['Category','Percent of Income']];
        Object.keys(budget).forEach(function(key, index) {
            var value = budget[key];
            const category = [`${key}`, value];
            data.push(category);
        });
        console.log('data',data)
        this.setState({ chartBudget: data })
    }

    render(){
        return(
            <div>
                <div className='form'>
                <FormControl className={'formControl'}>
                    <InputLabel htmlFor="component-simple">Monthly Income</InputLabel>
                    <Input id="component-simple" name='income' value={this.state.budget.income ? this.state.budget.income : ''} onChange={this.handleChange} />
                </FormControl>
                <FormControl className={'formControl'}>
                    <InputLabel htmlFor="component-simple">Monthly Rent</InputLabel>
                    <Input id="component-simple" name='rent' value={this.state.budget.rent ? this.state.budget.rent : '' } onChange={this.handleChange} />
                </FormControl>
                <Fab color="primary" aria-label="Add" >
                    <AddIcon />
                </Fab>
                <Button onClick={ this.formatIncomeData } className='submit' variant="contained" color="primary" >Submit</Button>
                </div>
                <div className='chart'>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.chartBudget ? this.state.chartBudget : budget.data}
                        options={{
                            title: 'Budget',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                        />
                </div>
            </div>
        )
    }
}