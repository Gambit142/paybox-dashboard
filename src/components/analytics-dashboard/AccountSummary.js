import styles from './account-summary.module.css';
import accountDetails from '../../data/accountDetails';

const AccountSummary = () => (
  <section className={`flex flex-column ${styles.accountSummaryContainer}`}>
    <div className={`${styles['balance-container']} flex flex-column secondary-background`}>
      <div className={`${styles.image} ${styles.image1}`} />
      <div className={`${styles.image} ${styles.image2}`} />
      <div className={`${styles.image} ${styles.image3}`} />
      <div className={`${styles.image} ${styles.image4}`} />
      <div className={`nunito-font-400 flex flex-column fs-14 ${styles.walletBalText} ${styles.overlay}`}>
        <h4>Wallet Balance</h4>
        <div className={`sora-font-600 white fs-20 flex font-numeric ${styles.walletBalAmt}`}>
          <span>₦50,000</span>
          <img src="/assets/images/eye.svg" alt="eye icon" />
        </div>
        <div className={`${styles.walletBtnDiv} flex`}>
          <button type="button" className={`nunito-font-600 fs-14 white ${styles.btn1}`}>
            Add Fund
          </button>
          <button type="button" className={`nunito-font-600 fs-14 white ${styles.btn2}`}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
    {accountDetails.map((detail) => (
      <article className={`${styles.accountDetailsContainer}`} key={detail.detailType}>
        <div className={`${styles.accountDetails} flex flex-column`}>
          <span className={`light-blue sora-font-400 fs-14 font-numeric ${styles.detailInfo} ${styles.detailType}`}>{detail.detailType}</span>
          <span className={`dark-blue font-numeric sora-font-600 fs-20 ${styles.detailInfo} ${styles.detailValue}`}>{detail.detailAmount}</span>
        </div>
        <div className="flex">
          <button type="button" className={`dark-blue font-numeric nunito-font-400 fs-12 ${styles.detailType} ${styles.detailInfo} ${styles.detailsBtn}`}>
            View Details
          </button>
          <div className={styles.rightIconDiv}>
            <img src="./assets/images/group-right-icon.svg" alt="group-right-icon" />
          </div>
        </div>
      </article>
    ))}
  </section>
);

AccountSummary.displayName = 'AccountSummary';

export default AccountSummary;
