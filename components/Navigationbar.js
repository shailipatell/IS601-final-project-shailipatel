// components/NavBar.js
import Link from 'next/link';
import styles from './Navigationbar.module.css'; // Create a corresponding CSS module

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
             Shaili's Portfolio               
            </div>
            <div className={styles.menu}>
                <a href="/">          Home</a>
                <a href="about">About</a>
                <a href="privacy">Privacy Policy</a>
                <a href="projects">Projects</a>
            </div>
        </nav>
    );
}