import React from "react";
import SkillIcon from "../components/SkillIcon";
import skills from "../utils/skillIcons";

const About = () => {
  return (
    <div className="p-8 pt-2">
      <h1 className="mainTitle">MOI</h1>
      <h3 className="title-about">Qui suis-je ?</h3>
      <p className="paragraph-about">
        Originaire du Nord, plus précisément à Blacy, dans un petit village à 90
        km de Reims, je m'appelle Luka et j'ai 20 ans. Durant mon enfance
        jusqu'à mes 16 ans, je passais mes journées entières à jouer aux jeux
        vidéos. C'est d'ailleurs à mes 16 ans que j'ai découvert le monde du
        développement web (et à être sorti de ma tanière aussi). En ce moment
        j'adore lire des livres, faire du street workout ou de la musculation,
        la spiritualité et surtout, m'armer de ma souris, de mon clavier et de
        mon petit thé vert pour développer des projets.
      </p>
      <h3 className="title-about">Mon parcours</h3>
      <p className="paragraph-about">
        Durant mon année de premiere S SI je suivais déjà les cours de Mathieu
        Nebra sur le &nbsp;
        <a
          className="link-about underline"
          href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3"
          target="_blank"
          rel="noreferrer"
        >
          HTML et CSS sur OpenClassrooms
        </a>
        . En terminale j'ai pu réellement mettre en pratique ce que j'ai appris,
        notamment dans mon projet de SI et d'ISN où j'ai utilisé énormément
        d'animations CSS. Une fois avoir obtenu mon bac j'ai poursuivi mes
        études d'info dans l'IUT de Reims, où j'apprendrais les bases de la
        programmation, classique et orienté objet ainsi que le développement
        web. En parallèle des études, dans la période du début du confinement
        jusqu'à fin juillet 2020, je réalisais les projets du &nbsp;
        <a
          className="link-about underline"
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          FreeCodeCamp
        </a>
        , j'aurai appris à bien coder en JavaScript et a réaliser des projets
        avec les librairies D3 et React et à créer des petites API avec Node et
        Express.js.
        <br />
        <br />
        Pendant ma 2eme année j'ai pu approfondir mes compétences dans le
        développement web et j'aurai réalisé un stage où j'aurai participé au
        développement d'un back office et de l'affichage des informations sur
        une application avec Symfony et React. Vous pourrez retrouver une partie
        de mes projets dans mon portfolio.
      </p>

      <h3 className="title-about">Mes compétences</h3>
        <div className="flex flex-wrap justify-center">
            {skills.map((skill, i) => <SkillIcon icon={skill} key={i}/>)}
        </div>
      <h3 className="title-about">Expériences</h3>
      <p className="paragraph-about">
        Mars-Juin 2021: Stage chez &nbsp;
        <a
          className="link-about underline"
          href="https://www.isics.fr/"
          target="_blank"
          rel="noreferrer"
        >
          Isics
        </a>
         , en tant que Développeur web fullstack.
      </p>
    </div>
  );
};

export default About;
