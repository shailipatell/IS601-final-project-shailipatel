import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await response.json();

    if (error) {
      setMessage(`Oops! ${error}`);
      return;
    }

    setEmail('');
    setMessage('Success! 🎉 You are now subscribed.');
  };

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
        <form onSubmit={subscribe}>
          <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
}
