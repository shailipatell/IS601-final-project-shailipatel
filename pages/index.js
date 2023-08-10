import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { logPageView } from '../lib/ga4';
import NavBar from '../components/Navigationbar';

export default function Home() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [hasUserGivenConsent, setHasUserGivenConsent] = useState(false);
    const [ga4Loaded, setGa4Loaded] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const userConsent = localStorage.getItem('userGAConsent');
        if (userConsent === 'true') {
            setHasUserGivenConsent(true);
        }

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
 <NavBar/>
            {/* <section className={styles.section}>
                <NavBar/>
                <h1>Hey, this is Shaili Patel</h1>
                <p>Passionate developer, currently pursuing masters in Computer Science</p>
                <Link href="/projects">
                    <button className={styles.button}>View My Projects</button>
                </Link>
            </section> */}
            <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my journey in the world of computer science, my passion, projects, and more. Currently pursuing a Master's in Computer Science and passionate about technology.</p>
        <Link href="/projects">
          <button className={styles.button}>View My Projects</button>
        </Link>
      </section>

      {/* <section className={styles.subscribe}>
        <h2>Want to get in touch?</h2>
        <p>Subscribe to my newsletter, and I'll reach out to you. Get my resume directly in your inbox!</p>
      
      </section> */}

      {/* <footer className={styles.footer}>
        <Link href="/privacy">Privacy Policy</Link>
        <a href="https://github.com/yourgithubusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank">LinkedIn</a>
      </footer> */}
    </div>

            {/* <section className={styles.section}>
                <h2>About Me</h2>
                <p>
                    With over X years of experience in software development, I've contributed to projects that have impacted millions. When I'm not coding, you can find me hiking or reading a sci-fi novel.
                </p>
            </section> */}

            {/* <section className={styles.section}>
                <h2>Portfolio</h2>
                <div className={styles.portfolioContainer}>
                    <div className={styles.portfolioItem}>
                        <img src="/path_to_image1.jpg" alt="Project 1" />
                        <h3>Project 1</h3>
                        <p>Short description about Project 1.</p>
                    </div>
                    <div className={styles.portfolioItem}>
                        <img src="/path_to_image2.jpg" alt="Project 2" />
                        <h3>Project 2</h3>
                        <p>Short description about Project 2.</p>
                    </div>
                </div>
            </section> */}

            <section className={styles.section}>
            <h2>Want to get in touch?</h2>
        <p>Subscribe to my newsletter, and I'll reach out to you. Get my resume directly in your inbox!</p>
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

            <section className={styles.section}>
                <h2>Contact</h2>
                <p>If you have any queries or want to work together, feel free to contact me!</p>
                <div className={styles.contactLinks}>
                    <a href="mailto:youremail@example.com" className={styles.contactLink}>Email me  </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn  </a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Twitter  </a>
                    <a href="https://github.com/yourgithubusername" target="_blank">GitHub</a>
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="/privacy">Privacy Policy</Link>
            </footer>
        </div>
    );
}
