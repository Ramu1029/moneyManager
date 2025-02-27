import './index.css'

const TransactionItem = props => {
  const {transactionObj, deleteTransactionDetails} = props
  const {transactionId, title, amount, type} = transactionObj
  const onDeleteTransaction = () => {
    deleteTransactionDetails(transactionId)
  }
  return (
    <li className="transaction-row">
      <p className="record">{title}</p>
      <p className="record">{amount}</p>
      <p className="record">{type}</p>
      <button
        className="delete-btn"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
