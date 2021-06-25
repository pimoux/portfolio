import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="mainTitle">MOI</h1>
      <h3 className="titleAbout">Qui suis-je ?</h3>
      <p className="paragraphAbout">
        Originaire du Nord, plus précisément a Blacy, dans un petit village a 90
        km de Reims, je m'appelle Luka et j'ai 20 ans. Durant mon enfance et
        jusqu'a mes 16 ans, je passais mes journées entieres a jouer aux jeux
        vidéos. C'est d'ailleurs a mes 16 ans que j'ai découvert le monde du
        développement web (et a etre sorti de ma taniere aussi). En ce moment
        j'adore lire des livres, faire du street workout ou de la musculation,
        la spiritualité et surtout, m'armer de ma souris, de mon clavier et de
        mon petit thé vert pour déveloper des projets.
      </p>
      <h3 className="titleAbout">Mon parcours</h3>
      <p className="paragraphAbout">
        Durant mon année de premiere S SI je suivais deja les cours de Mathieu
        Nebra sur le &nbsp;
        <a
          className="linkAbout"
          href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3"
          target="_blank"
          rel="noreferrer"
        >
          HTML et CSS sur OpenClassrooms
        </a>
        . En terminale j'ai pu réellement exploiter ce que j'ai appris,
        notamment dans mon projet de SI et d'ISN ou j'ai utilisé énormément
        d'animations CSS. Une fois avoir obtenu mon bac j'ai poursuivi mes
        études d'info dans l'IUT de Reims, ou j'apprendrais les bases de la
        programmation, classique et orienté objet ainsi que le développement
        web. En parallele des etudes, dans la période du début du confinement
        jusqu'a fin juillet 2020, je réalisais les projets du &nbsp;
        <a
          className="linkAbout"
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          FreeCodeCamp
        </a>
        , j'aurai appris a bien coder en JavaScript et a réaliser des projets
        avec la librairie D3, React et a créer des petites API avec Node et
        Express.js.
        <br />
        <br />
        Pendant ma 2eme année j'ai pu approfondir mes compétences dans le
        développement web et j'aurai réalisé un stage ou j'aurai participé au
        développement d'un back office et de l'affichage des informations sur
        une application avec Symfony et React. Vous pourrez retrouver une partie
        de mes projets dans mon portfolio.
      </p>

      <h3 className="titleAbout">Mes compétences</h3>
      <p className="paragraphAbout">Langages: HTML, CSS, JS, PHP, MySQL</p>
      <p className="paragraphAbout">Frontend: React, jQuery, D3, TailwindCSS</p>
      <p className="paragraphAbout">Backend: Symfony, Node, Express, JWT</p>
      <p className="paragraphAbout">
        Environnement de travail: Windows, MacOS, VS Code, PHPStorm, Git
      </p>
      <h3 className="titleAbout">Expériences</h3>
      <p className="paragraphAbout">
        Mars-Juin 2021: Stage chez &nbsp;
        <a
          className="linkAbout"
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
