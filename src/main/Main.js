import React, { Component } from 'react';

import './Main.css';
import BudgetFormContainer from '../containers/BudgetForm.Container';
import BudgetChartContainer from '../containers/Chart.Container';


export default class Main extends Component {
  render() {
    return (
            <div>
                <BudgetFormContainer />
                <div className="chart">
                  <BudgetChartContainer />
                </div>
            </div>
    );
  }
}
