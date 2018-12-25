import { connect } from 'react-redux';
import { updateBudget } from '../redux/actions';
import BudgetForm from '../components/BudgetForm';


const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  updateBudget: budget => dispatch(updateBudget(budget)),
  dispatch,
});

const BudgetFormContainer = connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
export default BudgetFormContainer;
