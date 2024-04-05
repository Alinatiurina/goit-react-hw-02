import css from "./TransactionHistory.module.css"

export default function TransactionHistory(
  {transactions}) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.title}>
          <th className={css.titleItem}>Type</th>
          <th className={css.titleItem}>Amount</th>
          <th className={css.titleItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr className={css.text} key={transaction.id}>
            <td className={css.text}>{transaction.type}</td>
            <td className={css.text}>{transaction.amount}</td>
            <td className={css.text}>{transaction.currency}</td>
          </tr>))}
      </tbody>
    </table>
  );
}
