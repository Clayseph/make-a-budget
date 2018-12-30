import { connect } from 'react-redux';
import BudgetChart from '../components/BudgetChart';


const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const BudgetChartContainer = connect(mapStateToProps, mapDispatchToProps)(BudgetChart);
export default BudgetChartContainer;
