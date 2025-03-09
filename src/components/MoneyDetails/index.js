// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props

  return (
    <div className="account-types-container">
      <div className="account-card-container balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="account-type-img"
          alt="balance"
        />
        <div className="card-description">
          <p className="account-type">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="account-card-container income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="account-type-img"
          alt="income"
        />
        <div className="card-description">
          <p className="account-type">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="account-card-container expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="account-type-img"
          alt="expenses"
        />
        <div className="card-description">
          <p className="account-type">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
