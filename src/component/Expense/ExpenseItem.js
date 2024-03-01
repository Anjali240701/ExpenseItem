import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails'

function ExpenseItem(props) {
  const deleteExpenseHandler = () => {
    
    props.deleteExpense(props.id);
  };
 
  return (
    <Card className='expense-item'>

    <ExpenseDate date ={props.date} />
    
      
    <ExpenseDetails amount={props.amount} locationofexpenditure={props.locationofexpenditure}   title={props.title} />
   
    
    
     <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
   
  );
}
export default ExpenseItem;
