import React from "react";
import imageHome from "../assets/images/imageHome.jpeg";

const Home = () => {
  return (
    <div className="presentation">
      <p className="quotation">
        <q>
          Un humain dépourvu de repères est un humain facilement manipulable.
        </q><br />
        Kilian Sensei
      </p>
      <div className="presentation-text-image-container">
        <div className="presentation-text-container">
          <h1 className="text-presentation">
            Bonjour je suis Luka
            <br />
            Developpeur web fullstack
          </h1>
          <p className="paragraph-presentation">
            Developpeur junior, j'ai toujours été passionné par le monde du
            développement web, qu'il s'agisse de projets frontend, backend,
            fullstack ou encore d'intégration web
          </p>
        </div>
        <img src={imageHome} alt="" className="imageMainPage resize" />
      </div>
    </div>
  );
};

export default Home;
