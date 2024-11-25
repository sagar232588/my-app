"use client";
import styles from './About.module.css';
import Navbar from "../navbar/page";
export default function About() {
  return (
    <><Navbar/>
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p>
        Hello! My name is [Your Name], and I am passionate about creating
        innovative solutions through technology. Currently, I am a [your role,
        e.g., "BCA student in my 7th semester at NCCS College"], exploring the
        exciting world of software development and design.
      </p>
      <h2 className={styles.subtitle}>Skills & Interests</h2>
      <ul className={styles.list}>
        <li>Frontend Development: HTML, CSS, JavaScript, React</li>
        <li>Backend: PHP, MySQL</li>
        <li>Projects: Hotel Reservation System, Hospital Management System, Collision Detection Game</li>
        <li>Interests: IoT, eHealth, and creative problem-solving</li>
      </ul>
      <h2 className={styles.subtitle}>Education</h2>
      <p>
        I am currently pursuing a Bachelor's in Computer Applications (BCA) at
        NCCS College. My academic journey has been a blend of theory and
        practical application, equipping me with the skills to build real-world
        projects.
      </p>
      <h2 className={styles.subtitle}>Contact</h2>
      <p>
        Feel free to connect with me via email: 
        <a href="mailto:sagarregmi2075@gmail.com" className={styles.link}>
        sagarregmi2075@gmail.com
        </a>
      </p>
    </div>
    </>
  );
}
