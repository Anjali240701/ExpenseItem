import React, { useState } from 'react';

import Expenses from './component/Expense/Expenses';
import NewExpense from './component/NewExpense/NewExpense';


function App() {
  const [expenses, setExpenses] =useState([

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
  ]);

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
  return (
    <div>
     <NewExpense/>
    <Expenses items={expenses} 
    deleteExpense={deleteExpense}
    changeexpense={changeexpense}/>
    </div>
  );
}

export default App;
