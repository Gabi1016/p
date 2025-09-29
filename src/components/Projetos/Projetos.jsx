import React from "react";
import ProjetoCard from "./ProjetoCard";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Cadastro de Filmes",
      descricao:
        "Desenvolvi sozinha um sistema de cadastro para filmes, onde um administrador podia adicionar e visualizar todos os itens cadastrados. Aprimorei habilidades de JavaScript, HTML e CSS na prática.",
      github: "https://github.com/Gabi1016/MINI-PROJETO-M2.git",
      img: "miniprojeto.png"
    },
    {
      titulo: "Quiz Interativo",
      descricao:
        "Trabalhei em equipe em um quiz interativo do curso PDA, desenvolvendo várias funcionalidades em JavaScript, incluindo validação de respostas e lógica de pontuação. Aprendi a integrar colaboração e programação de front-end.",
      github: "https://github.com/Gabi1016/Projeto-Final2.git",
      img: "grupo.png"
    }
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.titulo}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.titulo} {...projeto} />
        ))}
      </div>
    </section>
  );
}
