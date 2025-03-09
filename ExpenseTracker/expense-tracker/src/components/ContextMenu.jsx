export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
}) {
  if (!menuPosition || Object.keys(menuPosition).length === 0) return;
  // if (!menuPosition || menuPosition.left === undefined || menuPosition.top === undefined) return undefined;
  // both the conditions above will work
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevExpenses)=> prevExpenses.filter(item => item.id !== rowId));
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
