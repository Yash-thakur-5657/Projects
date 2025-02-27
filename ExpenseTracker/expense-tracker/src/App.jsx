import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ContextMenu from './components/ContextMenu'
import expenseData from './expenseData'
import './App.css'
import { useState } from 'react'

function App() {
  const [expenses , setExpenses] = useState(expenseData);
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm setExpenses={setExpenses}/>
       <ExpenseTable expenses = {expenses}/> 
        <ContextMenu/>
      </div>
    </main>
    </>
  )
}

export default App
