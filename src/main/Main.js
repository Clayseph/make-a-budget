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
        this.state = {}
    }

    handleChange = (event) => {
        const value = parseInt(event.target.value);
        this.setState({ [event.target.name] : value });
      }
    addCategory = () => {

    }

    formatIncomeData = (event) => {
        console.log(this.state)
        if(event.key === 'Enter'){
         const budget = {data:[
            ['Category','Percent of Love'],
            ['Extra Income',this.state.income],
            ['Food',600],
            ['Rent',15],
            ['Fun',60]
        ]};
        this.setState({ budget })
        }
    }

    render(){
        return(
            <div>
                <div className='form'>
                <FormControl className={'formControl'}>
                    <InputLabel htmlFor="component-simple">Monthly Income</InputLabel>
                    <Input id="component-simple" name='income' value={this.state.income ? this.state.income : ''} onChange={this.handleChange} onKeyPress={this.formatIncomeData} />
                </FormControl>
                <FormControl className={'formControl'}>
                    <InputLabel htmlFor="component-simple">Monthly Rent</InputLabel>
                    <Input id="component-simple" name='rent' value={this.state.rent ? this.state.rent : '' } onChange={this.handleChange} onKeyPress={this.formatIncomeData} />
                </FormControl>
                <Fab color="primary" aria-label="Add" >
                    <AddIcon />
                </Fab>
                <Button className='submit' variant="contained" color="primary" >Submit</Button>
                </div>
                <div className='chart'>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.budget ? this.state.budget.data : budget.data}
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