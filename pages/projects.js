// import styles from '../styles/Projects.module.css'

// export default function Projects() {
//   // Sample data, you'd probably fetch this or have it in a different structure
//   const projects = [
//     {
//       title: "Fake News Detection",
//       description: "It was a group project primarily focused on Machine learning",
//       image: "/path-to-image1.jpg",
//       techStack: ["Python", "ML"]
//     },
//     // ... other projects
//   ];

//   return (
//     <div className={styles.divClass}>
//       <h1 className={styles.h1Class}>My Projects</h1>
//       {projects.map((project, index) => (
//         <div key={index} className={styles.divClass}>
//           <img src={project.image} alt={project.title} className={styles.imgClass} />
//           <h2 className={styles.h2Class}>{project.title}</h2>
//           <p>{project.description}</p>
//           <ul className={styles.ulClass}>
//             {project.techStack.map(tech => <li key={tech} className={styles.liClass}>{tech}</li>)}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
import NavBar from '../components/Navigationbar';
import styles from '../styles/Projects.module.css';


export default function Projects() {
  // Sample data
  const projects = [
    {
      title: "Fake News Detection",
      description: "It was a group project primarily focused on Machine learning",
      techStack: ["Python", "ML"]
    },
    {
      title: "E-commerce Platform",
      description: "A robust platform for online shopping with secure payment gateway integration.",
      techStack: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Personal Portfolio",
      description: "Responsive personal portfolio showcasing my projects, blogs, and skills.",
      techStack: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "News-Bee",
      description: "A user-friendly Android application that provides news from various sources in a unified format.",
      techStack: ["React", "Node.js"]
    },
    {
      title: "Car Rental System",
      description: "A database design project aimed at streamlining the rental process for cars, enhancing user experience, and optimizing operations.",
      techStack: ["SQL", "Database Design"]
    },
    {
      title: "Travel With Me",
      description: "An Android application for travel enthusiasts to plan and share their journeys.",
      techStack: ["Android","Google API"]
    }
    // ... you can add other projects in the same format
  ];

  return (
    <div>
     <NavBar/>
    <div className={styles.divClass}>
      <h1 className={styles.h1Class}>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.divClass}>
          {/* <img src={project.image} alt={project.title} className={styles.imgClass} /> */}
          <h2 className={styles.h2Class}>{project.title}</h2>
          <p>{project.description}</p>
          <ul className={styles.ulClass}>
            {project.techStack.map(tech => <li key={tech} className={styles.liClass}>{tech}</li>)}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
}

