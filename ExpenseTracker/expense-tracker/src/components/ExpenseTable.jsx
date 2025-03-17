import { useState, useMemo, useCallback } from "react";
import ContextMenu from "./ContextMenu";
import localData from "./useLocalStorage";
import useLocalStorage from "./useLocalStorage";

export default function ExpenseTable({
  expenses,
  setExpenses,
  setId,
  rowId,
  setExpense,
  setButtonValue,
  setUpdatedExpense,
}) {
  const [filterOption, setFilterOption] = useState("");
  const [menuPosition, setMenuPosition] = useState({});
  const [sortCallback, setSortCallback] = useState(() => (a, b) => 0);

  // Memoized filtered & sorted expenses
  const filteredAndSortedExpenses = useMemo(() => {

    return expenses
      .filter((option) => option.category.toLowerCase().includes(filterOption))
      .sort(sortCallback);
  }, [expenses, filterOption, sortCallback]);

  // Memoized total amount calculation
  const totalAmount = useMemo(
    () =>
      filteredAndSortedExpenses.reduce(
        (sum, expense) => sum + +expense.amount,
        0
      ),
    [filteredAndSortedExpenses]
  );

  // Memoized event handlers to prevent re-creation on each render
  const handleFilterChange = useCallback((e) => {
    setFilterOption(e.target.value.toLowerCase());
  }, []);

  const handleSortAscending = useCallback(() => {
    setSortCallback(() => (a, b) => a.amount - b.amount);
  }, []);

  const handleSortDescending = useCallback(() => {
    setSortCallback(() => (a, b) => b.amount - a.amount);
  }, []);

  const handleSortTitleAscending = useCallback(() => {
    setSortCallback(() => (a, b) => a.title.localeCompare(b.title));
  }, []);

  const handleSortTitleDescending = useCallback(() => {
    setSortCallback(() => (a, b) => b.title.localeCompare(a.title));
  }, []);

  const handleContextMenu = useCallback(
    (e, id) => {
      e.preventDefault();
      setMenuPosition({ left: e.clientX, top: e.clientY });
      setId(id);
    },
    [setId]
  );

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        expenses={expenses}
        setExpenses={setExpenses}
        rowId={rowId}
        setExpense={setExpense}
        setButtonValue={setButtonValue}
        setUpdatedExpense={setUpdatedExpense}
      />
      <table className="expense-table" onClick={() => setMenuPosition({})}>
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={handleSortTitleAscending}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={handleSortTitleDescending}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={handleSortAscending}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={handleSortDescending}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedExpenses.map(({ id, title, category, amount }) => (
            <tr key={id} onContextMenu={(e) => handleContextMenu(e, id)}>
              <td>{title}</td>
              <td>{category}</td>
              <td>₹{amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{totalAmount}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
