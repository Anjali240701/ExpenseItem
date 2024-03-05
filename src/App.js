import React, { useState } from 'react';

import Expenses from './component/Expense/Expenses';
import NewExpense from './component/NewExpense/NewExpense';



  const DUMMY_EXPENSES=[

    {
      id: 1,
      title: 'food',
      amount: 10,
      date: new Date(2020, 7, 14),
      locationofexpenditure:'bangalore'
      
    },
    {
      id: 2,
      title: 'petrol',
      amount: 100,
      date: new Date(2020, 8, 15),
      locationofexpenditure:'goa'
    },
    {
      id: 3,
      title: 'movies',
      amount: 200,
      date: new Date(2021, 1, 14),
      locationofexpenditure:'pune'
    }
  ]
  const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

 const deleteExpense = (id) => {
  console.log('Deleting expense with id:', id);
  setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
};

 
 const changeexpense = (id) => {
  setExpenses(prevExpenses =>
      prevExpenses.map(expense =>
        expense.id === id ? { ...expense, amount: 100 } : expense
      )
    );
};
const addExpenseHandler = expense =>{
  console.log('In App.js');
  console.log(expense);
};
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} 
    deleteExpense={deleteExpense}
    changeexpense={changeexpense}/>
    </div>
  );
}

export default App;
