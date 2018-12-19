import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { budget } from '../resources/testBudget'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            value:''
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    render(){
        return(
            <div>
                <FormControl className={'formControl'}>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" value={this.state.value} onChange={this.handleChange} />
                </FormControl>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={budget.data}
                    options={{
                        title: 'My Daily Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
            </div>
        )
    }
}