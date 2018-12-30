import React, { Component } from 'react';
import Chart from 'react-google-charts';

export default class BudgetChart extends Component {
  render() {
    if (!this.props.budget) {
      return null;
    }
    return (<Chart
      width="700px"
      height="700px"
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={this.props.budget}
                    //   data={this.state.chartBudget ? this.state.chartBudget : budget.data}
      options={{
        title: 'Budget',
      }}
      rootProps={{ 'data-testid': '1' }}
    />);
  }
}
