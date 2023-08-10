import Link from 'next/link';
import styles from '../styles/Privacy.module.css';
import NavBar from '../components/Navigationbar';

export default function PrivacyPolicy() {
  return (
    <div><NavBar/>
    <div className={styles.container}>
    <div className={styles.card}>
      
      {/* <h1 className={styles.title}>Privacy Policy</h1> */}
      
      <h2 className={styles.subTitle}>1. What data we collect:</h2>
      <p className={styles.text}>We collect the following data from our users:</p>
      <ul className={styles.list}>
        <li>Email addresses (for users who subscribe).</li>
        <li>Usage data through Google Analytics (e.g., visited pages, time spent).</li>
        {/* Add other data points here. */}
      </ul>

      <h2 className={styles.subTitle}>2. Why we collect the data:</h2>
      <p className={styles.text}>We collect data for the following purposes:</p>
      <ul className={styles.list}>
        <li>To keep users informed through subscription emails.</li>
        <li>To analyze website usage and improve user experience.</li>
        {/* Add other reasons here. */}
      </ul>

      <h2 className={styles.subTitle}>3. How we use the data:</h2>
      <p className={styles.text}>We use the data in the following ways:</p>
      <ul className={styles.list}>
        <li>To send periodic emails to subscribers.</li>
        <li>To make informed decisions on website improvements.</li>
        {/* Add other use-cases here. */}
      </ul>

      <h2 className={styles.subTitle}>4. Third parties with whom we share the data:</h2>
      <p className={styles.text}>We share the data with the following third parties:</p>
      <ul className={styles.list}>
        <li>Google Analytics (for website usage analysis).</li>
        {/* Add other third parties here. */}
      </ul>

      <h2 className={styles.subTitle}>5. Contacting us:</h2>
      <p className={styles.text}>
        If you have any queries related to your data, wish to amend it, or request its deletion, please contact us at:
        <a className={styles.link} href="mailto:example@example.com">shaili@example.com</a>
      </p>
      
      <Link href="/">Back to Home</Link>
    </div>
    </div>
    </div>
  );
}
