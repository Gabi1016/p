import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <p className={styles.texto}>
          Olá! Meu nome é <strong>Gabriela Flores Costa</strong> e sou desenvolvedora front-end em formação, apaixonada por criar experiências digitais modernas e funcionais. Acredito que a programação é uma forma de transformar ideias em soluções que impactam pessoas.
        </p>
        <p className={styles.texto}>
          O que me inspira na programação é poder unir criatividade e lógica para construir projetos que façam diferença. Também vejo no mercado de tecnologia uma oportunidade incrível de aprender continuamente e evoluir profissionalmente.
        </p>
        <p className={styles.texto}>
          Um dos meus projetos favoritos foi desenvolver sozinha um sistema de cadastro de filmes, permitindo que um administrador gerencie conteúdos de forma organizada. Esse projeto reforçou minha paixão por front-end e me ensinou a resolver desafios reais com código.
        </p>
        <p className={styles.texto}>
          Me considero criativa, detalhista e paciente — qualidades essenciais para enfrentar desafios e entregar soluções eficientes. Estou sempre estudando novas tecnologias e buscando formas de melhorar minhas habilidades em front-end.
        </p>
        <p className={styles.texto}>
          Meu objetivo é trabalhar em empresas que valorizem inovação, onde eu possa aplicar meus conhecimentos, crescer profissionalmente e contribuir para projetos digitais impactantes.
        </p>
      </div>
    </section>
  );
}
