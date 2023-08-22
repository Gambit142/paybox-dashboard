import PropTypes from 'prop-types';
import styles from './aggregate-metrics.module.css';

const AggregateMetrics = ({ aggregateMetricsData }) => (
  <section className="flex flex-column">
    {aggregateMetricsData.map((detail) => (
      <article key={detail.generalLabel} className={styles.metricsContainer}>
        <div className={`flex flex-column ${styles.metricsInfoDiv}`}>
          <div className={`flex ${styles.generalLabelDiv}`}>
            <span className={`sora-font-500 font-numeric light-blue fs-14 ${styles.textHeightSpacing1}`}>{detail.generalLabel}</span>
            <button type="button" className={`flex ${styles.moreBtn}`}>
              <span className={`nunito-font-500 font-numeric dark-blue ${styles.textHeightSpacing1}`}>More</span>
              <img src="./assets/images/dropdown-icon.svg" alt="dropdown-icon" />
            </button>
          </div>
          <div className={styles.timeIntervalDiv}>
            {detail.timeIntervalsMobile.map((timeInterval) => (
              <div key={timeInterval.label} className={`flex flex-column ${styles.infoDiv}`}>
                <span className={`light-blue font-numeric nunito-font-400 ${styles.textHeightSpacing1}`}>{timeInterval.label}</span>
                <span className={`dark-blue sora-font-600 font-numeric ${styles.textHeightSpacing2}`}>{timeInterval.value}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    ))}
  </section>
);

AggregateMetrics.displayName = 'AggregateMetrics';

AggregateMetrics.propTypes = {
  aggregateMetricsData: PropTypes.arrayOf(
    PropTypes.shape({
      generalLabel: PropTypes.string.isRequired,
      timeIntervalsMobile: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default AggregateMetrics;
