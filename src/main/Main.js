import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { budget } from '../resources/testBudget';

import './Main.css';
import BudgetFormContainer from '../containers/BudgetForm.Container';


export default class Main extends Component {
  render() {
    return (
            <div>
                <BudgetFormContainer />
                <div className="chart">
                    <Chart
                      width="700px"
                      height="700px"
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={budget.data}
                    //   data={this.state.chartBudget ? this.state.chartBudget : budget.data}
                      options={{
                        title: 'Budget',
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
    );
  }
}
