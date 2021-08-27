import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>September 23th 2000</div>
      <div className="expense-item__description">
        <h2>First project</h2>
        <div className="expense-item__price">$777</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
