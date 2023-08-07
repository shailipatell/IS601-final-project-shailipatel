import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.section}>
        <h1>Hey, this is Shaili Patel</h1>
        <p>Passionate developer, currently pursuing masters in Computer Science</p>
        <Link href="/projects">
          <button className={styles.button}>View My Projects</button>
        </Link>
      </section>

      <section className={styles.section}>
        <p>Want to get in touch or see my resume? Subscribe below!</p>
        
      
      </section>
    </div>
  );
}

