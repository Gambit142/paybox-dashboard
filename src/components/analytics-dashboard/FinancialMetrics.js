import { financialMetrics } from '../../data/transactionDetails';
import TransactionComparative from './Transaction-Comparative';
import styles from './metrics.module.css';

const FinancialMetrics = () => (
  <section>
    {financialMetrics.map((detail) => (
      <article key={detail.generalLabel} className={styles.metricsContainer}>
        <div className={`flex flex-column ${styles.metricsInfoDiv}`}>
          <div className={`flex ${styles.generalLabelDiv}`}>
            <span className={`sora-font-500 font-numeric light-blue fs-14 ${styles.textHeightSpacing1}`}>{detail.generalLabel}</span>
            <button type="button" className={`flex ${styles.moreBtn}`}>
              <span className={`nunito-font-500 font-numeric dark-blue ${styles.textHeightSpacing1}`}>More</span>
              <img src="./assets/images/dropdown-icon.svg" alt="dropdown-icon" />
            </button>
          </div>
          <div className={`flex ${styles.metricDiv}`}>
            {
              detail.metric.map((metric) => (
                <div key={metric.label} className={`flex flex-column ${styles.infoDiv} ${styles.metricInfo}`}>
                  <div className={`flex ${styles.metricInfo}`}>
                    {metric.color && <span className={`${styles.colorDot} ${styles[`${metric.color}`]}`} />}
                    <span className={`light-blue font-numeric nunito-font-400 ${styles.textHeightSpacing1}`}>{metric.label}</span>
                  </div>
                  <span className={`dark-blue sora-font-600 font-numeric ${styles.textHeightSpacing2}`}>{metric.value}</span>
                </div>
              ))
            }
          </div>
        </div>
      </article>
    ))}
    <TransactionComparative />
  </section>
);

FinancialMetrics.displayName = 'FinancialMetrics';

export default FinancialMetrics;
