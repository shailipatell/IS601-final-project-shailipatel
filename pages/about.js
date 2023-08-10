// import NavBar from '../components/Navbar';
// import styles from '../styles/About.module.css';

// export default function About() {
//   return (
//     <div className={styles.container}>
//         <NavBar/>
//       <h1>About Me</h1>
//       <p>Driven by passion and fueled by the aspiration to contribute to the digital realm, I embarked on a journey into the depths of computer science. While navigating through my Master's program, I've acquired an arsenal of technical skills, ranging from back-end development to cloud computing.</p>

//       <p>The internship I undertook was a transformational phase of my life. Engaging in real-world projects, collaborating with a team of like-minded professionals, and delivering solutions under stringent deadlines fortified my commitment to this dynamic field.</p>

//       <p>Apart from the academics and professional endeavors, I am an avid tech blogger, writing about the latest in technology, trends, and coding paradigms. On weekends, you can find me at tech meetups, workshops, or mentoring budding programmers.</p>

//       <p>As I stride forward, I'm enthusiastic about the endless possibilities and challenges that await and am geared up to make meaningful contributions to the world of technology.</p>
//     </div>
//   );
// }
import NavBar from '../components/Navigationbar';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
        <NavBar/>
    <div className={styles.container}>
       
        <div className={styles.card}>
            <h1>About Me</h1>
            <p>Driven by passion and fueled by the aspiration to contribute to the digital realm, I embarked on a journey into the depths of computer science. While navigating through my Master's program, I've acquired an arsenal of technical skills, ranging from back-end development to cloud computing.</p>

            <p>The internship I undertook was a transformational phase of my life. Engaging in real-world projects, collaborating with a team of like-minded professionals, and delivering solutions under stringent deadlines fortified my commitment to this dynamic field.</p>

            <p>Apart from the academics and professional endeavors, I am an avid tech blogger, writing about the latest in technology, trends, and coding paradigms. On weekends, you can find me at tech meetups, workshops, or mentoring budding programmers.</p>

            <p>As I stride forward, I'm enthusiastic about the endless possibilities and challenges that await and am geared up to make meaningful contributions to the world of technology.</p>
        </div>
    </div>
    </div>
  );
}


  