import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    inputTitleVal: '',
    inputAmountVal: '',
    inputAmountTypeId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onTitleChange = event => {
    this.setState({
      inputTitleVal: event.target.value,
    })
  }

  onAmountChange = event => {
    this.setState({
      inputAmountVal: event.target.value,
    })
  }

  onAmountTypeChange = event => {
    this.setState({
      inputAmountTypeId: event.target.value,
    })
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expenses += eachTransaction.amount
      }
    })
    const balanceMoney = income - expenses
    return balanceMoney
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }

  onAddTransactionDetails = event => {
    event.preventDefault()

    const {inputAmountVal, inputAmountTypeId, inputTitleVal} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOpt => eachOpt.optionId === inputAmountTypeId,
    )
    const {displayText} = typeOption

    if (inputAmountVal !== '' && inputTitleVal !== '') {
      const newTransaction = {
        transactionId: uuidv4(),
        title: inputTitleVal,
        amount: parseFloat(inputAmountVal),
        type: displayText,
      }

      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        inputTitleVal: '',
        inputAmountVal: '',
        inputAmountTypeId: transactionTypeOptions[0].optionId,
      }))
    }
  }

<<<<<<< HEAD
  deleteTransactionDetails = id => {
    const {transactionList}=this.state
    const updatedTransactonList=transactionList.filter(
=======
  deleteTransactionRecord = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
>>>>>>> updated code
        eachTransaction => eachTransaction.transactionId !== id,
    ),
      this.setState({
        transactionList: updatedTransactonList,
    })
  }

  render() {
    const {
      transactionList,
      inputAmountVal,
      inputAmountTypeId,
      inputTitleVal,
    } = this.state

    const balanceAmount = this.getBalanceAmount()
    const expensesAmount = this.getExpenses()
    const incomeAmount = this.getIncome()

    return (
      <div className="bg-container">
        <div className="user-container">
          <h1 className="greetings">Hi Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          expensesAmount={expensesAmount}
          incomeAmount={incomeAmount}
        />

        <div className="transaction-details-container">
          <div className="transaction-input-container">
            <form onSubmit={this.onAddTransactionDetails}>
              <h1 className="transaction-details-container-heading">
                Add Transaction
              </h1>

              <label htmlFor="titleInput" className="form-label">
                TITLE
              </label>
              <br />
              <input
                type="text"
                className="form-input"
                id="titleInput"
                value={inputTitleVal}
                onChange={this.onTitleChange}
                placeholder="TITLE"
                required
              />
              <br />
              <br />

              <label htmlFor="amountInput" className="form-label">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                className="form-input"
                id="amountInput"
                value={inputAmountVal}
                onChange={this.onAmountChange}
                placeholder="AMOUNT"
                required
              />
              <br />
              <br />

              <label htmlFor="typeInput" className="form-label">
                TYPE
              </label>
              <br />
              <select
                id="transactionTypeInput"
                className="form-input"
                value={inputAmountTypeId}
                onChange={this.onAmountTypeChange}
                required
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>

              <br />
              <br />

              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>

          <div className="transaction-history-container">
            <h1 className="transaction-details-container-heading">History</h1>
            <ul className="transaction-history-list">
              <li className="history-table-col">
                <p className="column">Title</p>
                <p className="column">Amount</p>
                <p className="column">Type</p>
              </li>
              {transactionList.length > 0
                ? transactionList.map(eachItem => (
                    <TransactionItem
                      transactionDetails={eachItem}
                      key={eachItem.transactionId}
                      deleteTransactionRecord={this.deleteTransactionRecord}
                    />
                  ))
                : ''}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
