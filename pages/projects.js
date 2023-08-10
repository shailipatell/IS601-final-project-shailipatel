import styles from '../styles/Projects.module.css'

export default function Projects() {
  // Sample data, you'd probably fetch this or have it in a different structure
  const projects = [
    {
      title: "Fake News Detection",
      description: "It was a group project primarily focused on Machine learning",
      image: "/path-to-image1.jpg",
      techStack: ["Python", "ML"]
    },
    // ... other projects
  ];

  return (
    <div className={styles.divClass}>
      <h1 className={styles.h1Class}>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.divClass}>
          <img src={project.image} alt={project.title} className={styles.imgClass} />
          <h2 className={styles.h2Class}>{project.title}</h2>
          <p>{project.description}</p>
          <ul className={styles.ulClass}>
            {project.techStack.map(tech => <li key={tech} className={styles.liClass}>{tech}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
