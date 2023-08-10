import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { logPageView } from '../lib/ga4';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasUserGivenConsent, setHasUserGivenConsent] = useState(false);
  const [ga4Loaded, setGa4Loaded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Load the user's consent from local storage.
    const userConsent = localStorage.getItem('userGAConsent');
    if (userConsent === 'true') {
      setHasUserGivenConsent(true);
    }

    // Check if the Google Analytics script has loaded.
    const ga4Script = document.querySelector(`script[src*="${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}"]`);
    if (ga4Script) {
      ga4Script.onload = () => {
        setGa4Loaded(true);
      };
    }

    return () => {
      if (ga4Script) {
        ga4Script.onload = null;
      }
    };
  }, []);

  useEffect(() => {
    if (hasUserGivenConsent && ga4Loaded) {
      logPageView();
    }
  }, [hasUserGivenConsent, ga4Loaded]);

  const handleConsent = () => {
    localStorage.setItem('userGAConsent', 'true');
    setHasUserGivenConsent(true);
  };

  const handleOptOut = () => {
    localStorage.setItem('userGAConsent', 'false');
    setHasUserGivenConsent(false);
  };

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
    setIsSubscribed(true);
    setMessage('Success! 🎉 You are now subscribed.');
  };

  const unsubscribe = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/unsubscribe', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await response.json();

    if (error) {
      setMessage(`Oops! ${error}`);
      return;
    }

    setEmail('');
    setIsSubscribed(false);
    setMessage('You have successfully unsubscribed.');
  };

  return (
    <div className={styles.homeContainer}>
      {!hasUserGivenConsent ? (
        <div className={styles.consentBanner}>
          We use cookies for analytics. By continuing, you consent to this use.
          <button onClick={handleConsent}>I Consent</button>
        </div>
      ) : (
        <div className={styles.consentBanner}>
          You have consented to analytics tracking. 
          <button onClick={handleOptOut}>Opt-Out</button>
        </div>
      )}
      
      <section className={styles.section}>
        <h1>Hey, this is Shaili Patel</h1>
        <p>Passionate developer, currently pursuing masters in Computer Science</p>
        <Link href="/projects">
          <button className={styles.button}>View My Projects</button>
        </Link>
      </section>

      <section className={styles.section}>
        <p>Subscribe to our newsletter to receive updates and news. We respect your privacy and only send content related to our services.</p>
      
        {!isSubscribed ? (
          <form onSubmit={subscribe}>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
            <div className={styles.checkboxContainer}>
              <input type="checkbox" required />
              <label>
                I agree to the <Link href="/privacy">privacy policy</Link> and understand how my data will be used.
              </label>
            </div>
            <button type="submit">Subscribe</button>
          </form>
        ) : (
          <form onSubmit={unsubscribe}>
            <button type="submit">Unsubscribe</button>
          </form>
        )}

        {message && <p>{message}</p>}
      </section>

      <footer className={styles.footer}>
        <Link href="/privacy">Privacy Policy</Link>
      </footer>

    </div>
  );
}



