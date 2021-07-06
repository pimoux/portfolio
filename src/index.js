import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

import React from "react";
import imageHome from "../assets/images/imageHome.jpeg";

const Home = () => {
  return (
    <div className="flex justify-between flex-col items-center p-8 sm:text-center lg:text-left">
      <p className="text-left text-turquoise mb-12">
        <q className='text-center'>
          Un humain dépourvu de repères est un humain facilement manipulable.
        </q><br />
        Kilian Sensei
      </p>
      <div className="flex justify-around sm:flex-col lg:flex-row sm:items-center lg:items-start">
        <div className="flex flex-col w-1/3">
          <h1 className="text-turquoise font-extrabold">
            Bonjour je suis Luka
            <br />
            Developpeur web fullstack
          </h1>
          <p className="text-grayish-light">
            Developpeur junior, j'ai toujours été passionné par le monde du
            développement web, qu'il s'agisse de projets frontend, backend,
            fullstack ou encore d'intégration web
          </p>
        </div>
        <img src={imageHome} alt="" className="sm:h-full sm:h-full lg:w-2/5 lg:h-2/5" />
      </div>
    </div>
  );
};

export default Home;

*/