import styles from './metrics.module.css';
import DoughnutChart from '../../utils/DoughnutChart';

const TransactionComparative = () => (
  <article className={styles.comparativeContainer}>
    <div className="flex flex-column">
      <h2 className={`light-dark nunito-font-600 fs-16 font-numeric ${styles.textHeightSpacing1}`}>Transaction Comparative</h2>
      <div>
        <div className={`flex ${styles.comparativeInfo}`}>
          <span className={`${styles.colorDot} ${styles.blue}`} />
          <span className={`light-dark nunito-font-600 fs-10 font-numeric ${styles.textHeightSpacing1}`}>Send money</span>
        </div>
        <span className={`dark sora-font-600 fs-16 ${styles.textHeightSpacing2}`}>₦105,000,000</span>
      </div>
      <hr />
      <div className={`flex ${styles.expensesDiv}`}>
        <div>
          <div className={`flex ${styles.comparativeInfo}`}>
            <span className={`${styles.colorDot} ${styles.yellow}`} />
            <span className={`light-dark nunito-font-600 fs-10 font-numeric ${styles.textHeightSpacing1}`}>Cashout</span>
          </div>
          <span className={`dark sora-font-600 fs-16 ${styles.textHeightSpacing2}`}>₦12,000,000</span>
        </div>
        <div>
          <div className={`flex ${styles.comparativeInfo}`}>
            <span className={`${styles.colorDot} ${styles.grey}`} />
            <span className={`light-dark nunito-font-600 fs-10 font-numeric ${styles.textHeightSpacing1}`}>Utilities and Bills</span>
          </div>
          <span className={`dark sora-font-600 fs-16 ${styles.textHeightSpacing2}`}>₦4,200,000</span>
        </div>
      </div>
    </div>
    <div>
      <DoughnutChart />
    </div>
  </article>
);

TransactionComparative.displayName = 'TransactionComparative';

export default TransactionComparative;
