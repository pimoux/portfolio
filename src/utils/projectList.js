import pricingComponent from "../assets/images/pricing-component.jpg";
import choropleth from "../assets/images/choropleth.png";
import pomodoro from "../assets/images/pomodoro.png";
import calculator from "../assets/images/calculator.jpg";
import chatApp from "../assets/images/chatApp.png";
import todoList from "../assets/images/todoList.png";
import librappBack from '../assets/images/librapp-back.png';

const projectList = [
    {
        id: 1,
        title: "Achat de pages vues",
        description: ["-Niveau junior sur FrontendMentor", "-HTML, CSS, JS", "-pas de backend", "-intégration web"],
        image: pricingComponent,
        href: "https://interactive-pricing-component-main-8t2fezeet-pimouxx.vercel.app/",
        type: 'développement web'
    },
    {
        id: 2,
        title: "Calculatrice",
        description: ["-Niveau intermédiaire sur FrontendMentor", "-HTML, CSS, JS", "-3 thèmes de couleurs différent", "-pas de backend", "-intégration web"],
        image: calculator,
        href: "https://calculator-app-main-eight.vercel.app/",
        type: 'développement web'
    },
    {
        id: 3,
        title: "Carte des Etats Unis",
        description: ["-4ème projet du FreeCodeCamp sur la visualisation de données", "-Librairie D3", "-2 appels API"],
        image: choropleth,
        href: "https://codepen.io/pimoux/full/mdVBLJx",
        type: 'développement web'
    },
    {
        id: 4,
        title: "Horloge Pomodoro",
        description: ["-5ème projet du FreeCodeCamp sur les framework frontend", "-React (classes)", "-pas de backend"],
        image: pomodoro,
        href: "https://codepen.io/pimoux/full/gOaVzOW",
        type: 'développement web'
    },
    {
        id: 5,
        title: "Application de chat",
        description: ["-beaucoup de fonctionnalités", "-React + socket.io", "-Nodejs + Express", "-système de salons"],
        image: chatApp,
        href: "https://stoic-panini-82e045.netlify.app/",
        type: 'développement web'
    },
    {
        id: 6,
        title: "Todo List",
        description: ["-simple Todo List", "-React", "-json-server", "-CRUD"],
        image: todoList,
        href: null,
        type: 'développement web'
    },
    {
        id: 7,
        title: "Application de voyage",
        description: ["-Page de profil", "-Feed", "-Grids avec filtres", "-Chat", "-Map + modales", "-Uniquement front"],
        image: todoList,
        href: null,
        type: 'développement iOS'
    },
    {
        id: 8,
        title: "Application de librairie",
        description: ["-Authentification + Inscription", "-requêtes API", "-Affichage de listes de données", "-Affichage d'images", "-Accès aux photos de l'utilisateur"],
        image: todoList,
        href: null,
        type: 'développement iOS'
    },
    {
        id: 9,
        title: "API de librairie",
        description: ["-Symfony + API platform", "-Authentification avec les JWT (lexik)", "-Upload d'images avec Vich", "-Factory + fixtures"],
        image: librappBack,
        href: "https://librapp-back.herokuapp.com/api/docs",
        type: 'développement web'
    },
]

export default projectList;