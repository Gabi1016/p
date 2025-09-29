import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU A 👋</p>
        <h1 className={styles.title}>
          Gabriela <br /> Flores
        </h1>
        <h2 className={styles.role}>
          Desenvolvedora Front-End em formação
        </h2>
        <p className={styles.description}>
          Transformo ideias em experiências digitais modernas e funcionais. Quer dar vida ao seu projeto online?
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
          <a href="/curriculo.pdf" className={styles.secondaryBtn}>
            Meu currículo
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/eu.png" 
          alt="Gabriela sorrindo"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>Email: <strong>gabrielafloresf989@gmail.com</strong></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
