import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const { items, deleteExpense } = props;

  const expenseItems = items.map(item => (
    <ExpenseItem
      id={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      locationofexpenditure={item.locationofexpenditure}
      deleteExpense={deleteExpense} // Pass deleteExpense down to ExpenseItem
    />
  ));

  return <Card className='expenses'>{expenseItems}</Card>;
}

export default Expenses;
