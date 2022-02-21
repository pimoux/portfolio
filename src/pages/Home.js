import React from "react";
import imageHome from "../assets/images/imageHome.jpeg";

const Home = () => {
  const quotations = [
    {
      text: 'Un humain dépourvu de repères est un humain facilement manipulable.',
      author: 'Killian Sensei'
    },
    {
      text: 'Traite toi comme si tu devrais traiter ton propre fils.',
      author: 'Killian Sensei'
    },
    {
      text: 'The best is YET to come',
      author: 'Donald J. Trump'
    },
    {
      text: 'Where we go one, we go all (WWG1WGA)',
      author: 'Donald J. Trump'
    },
  ];
  const randomQuotation = quotations[Math.floor(Math.random() * quotations.length)]
  return (
    <div className="flex justify-between flex-col items-center p-8 md:text-center md:text-left" id="home">
      <p className="text-center text-turquoise mb-12 sm:mt-0">
        <q>
          {randomQuotation.text}
        </q><br />
        {randomQuotation.author}
      </p>
      <div className="flex justify-around flex-col md:flex-row items-center">
        <div className="flex flex-col w-full justify-center md:justify-start md:w-1/3">
          <h1 className="text-turquoise text-3xl mb-12 font-extrabold text-center md:text-left">
            Bonjour je suis Luka
            <br />
            Developpeur web fullstack
          </h1>
          <p className="text-grayish-light text-center mb-4 md:mb-12 md:text-left">
            Developpeur junior, j'ai toujours été passionné par le monde du
            développement web, qu'il s'agisse de projets frontend, backend,
            fullstack ou encore d'intégration web
          </p>
        </div>
        <img src={imageHome} alt="" className="w-full h-full md:w-2/5 md:h-2/5" />
      </div>
    </div>
  );
};

export default Home;
