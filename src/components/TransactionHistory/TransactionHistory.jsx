import PropTypes from 'prop-types';
import Transaction from "components/Transaction/Transaction"
import css from "./transaction-history.module.css"
export default function TransactionHistory({transactions}){
    return (
    <table className={css.transactionHistory}>
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {transactions.map(({id, type, amount, currency}) =>(
           <Transaction
           key={id}
           type = {type}
           amount={amount}
           currency = {currency}/> 
        ))} 
    </tbody>
    </table>
    );
}

TransactionHistory.prototype = {
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}