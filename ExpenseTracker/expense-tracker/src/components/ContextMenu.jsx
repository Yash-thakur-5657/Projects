export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  expenses,
  setExpenses,
  setExpense,
  rowId,
  setButtonValue,
}) {
  if (!menuPosition || Object.keys(menuPosition).length === 0) return;
  // if (!menuPosition || menuPosition.left === undefined || menuPosition.top === undefined) return undefined;
  // both the conditions above will work

  // const [editObject,setEditObject] = useState({});

  function editDetails(rowId) {
    const {title,category,amount} = expenses.find((item) => item.id === rowId);
    // console.log(item);
    setExpense({title,category,amount});
  }

  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setMenuPosition({});
          setButtonValue('Save');
          editDetails(rowId);
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevExpenses) =>
            prevExpenses.filter((item) => item.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
