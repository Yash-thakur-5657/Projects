import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
// import ContextMenu from "./components/ContextMenu";
import expenseData from "./expenseData";
import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [rowId, setId] = useState("");
  const [buttonValue,setButtonValue] = useState('Add');
  const [updatedExpense,setUpdatedExpense] = useState({});
   const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
      email: "",
    });
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} buttonValue={buttonValue} rowId={rowId} setButtonValue={setButtonValue} />
          <ExpenseTable expenses={expenses} setExpenses={setExpenses} setId={setId} rowId={rowId} setExpense={setExpense} setButtonValue={setButtonValue} setUpdatedExpense={setUpdatedExpense}/>
        </div>
      </main>
    </>
  );
}

export default App;
