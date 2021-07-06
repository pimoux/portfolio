import fyloData from "../assets/images/fyloData.jpeg";
import pricingComponent from "../assets/images/pricing-component.jpg";
import fileUploader from "../assets/images/fileUploader.png";
import choropleth from "../assets/images/choropleth.png";
import pomodoro from "../assets/images/pomodoro.png";

const projectList = [
    {
        id: 1,
        title: "Page d'upload de fichiers",
        description: "Projet niveau junior sur FrontendMentor, réalisation de cette page uniquement en HTML et CSS, pas de backend",
        image: fyloData,
        href: "https://fylo-data-4nwbxrxtn.vercel.app/"
    },
    {
        id: 2,
        title: "Achat de pages vues",
        description: "Projet niveau junior sur FrontendMentor, réalisation de cette page uniquement en HTML, CSS et JS. Le prix varie en fonction du nombre de pages vues souhaités et réduction de 25% si le forfait choisi est annuel.",
        image: pricingComponent,
        href: "https://interactive-pricing-component-main-8t2fezeet-pimouxx.vercel.app/"
    },
    {
        id: 3,
        title: "Carte des Etats Unis",
        description: "4ème projet du FreeCodeCamp sur la visualisation de données, 2 appels API + utilisation de D3 pour pouvoir créer la carte des États Unis et y afficher le pourcentage d'adultes ayant leur bac dans chaque région.",
        image: choropleth,
        href: "https://codepen.io/pimoux/full/mdVBLJx"
    },
    {
        id: 4,
        title: "Horloge Pomodoro",
        description: "5eme projet du FreeCodeCamp sur les framework frontend. Horloge pomodoro réalisé uniquement en React (classes). Je fus triste des que j'ai terminé ce projet car j'aimais beaucoup React. J'en garde de magnifiques souvenirs aujourd'hui.",
        image: pomodoro,
        href: "https://codepen.io/pimoux/full/gOaVzOW"
    },
    {
        id: 5,
        title: "Petit service d'upload de fichiers",
        description: "5eme projet du FreeCodeCamp sur les API et Microservices. Petit service d'upload de fichiers réalisé avec Node et Express",
        image: fileUploader,
        href: "https://pimoux-file-metadata.glitch.me/"
    }
]

export default projectList;