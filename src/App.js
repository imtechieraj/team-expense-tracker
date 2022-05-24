import './App.css';
import React, { useState, useEffect } from 'react';
import TeamExpense from './components/Team-expense';
import Expense from './components/Expense-page';

function App() {
  const [totalMembers, setTotalMembers] = useState(null);
  const [showExpensePage, setShowExpensePage] = useState(false);

  const formChange = (e) => {
    if (e.target.value) {
      return setTotalMembers(e.target.value);
    } return setTotalMembers(null);
  }

  const props = {
    formChange,
    totalMembers,
    setShowExpensePage
  }
  if (showExpensePage) {
    return <Expense {...props} />
  }
  return (
    <div className="App">
      <TeamExpense {...props} />
    </div>
  );
}

export default App;
