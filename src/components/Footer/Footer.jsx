import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <p>© 2025 Gabriela Flores Costa</p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/gabriela-flores-flores-168ab7378/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/gaabriela_flores?igsh=MWRocjlrcTltaWM5dg=="
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="mailto:gabrielafloresf989@gmail.com" aria-label="Email">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}
