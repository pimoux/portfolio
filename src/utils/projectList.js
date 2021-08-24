import pricingComponent from "../assets/images/pricing-component.jpg";
import choropleth from "../assets/images/choropleth.png";
import pomodoro from "../assets/images/pomodoro.png";
import calculator from "../assets/images/calculator.jpg";
import chatApp from "../assets/images/chatApp.png";
import todoList from "../assets/images/todoList.png";

const projectList = [
    {
        id: 1,
        title: "Achat de pages vues",
        description: ["-Niveau junior sur FrontendMentor", "-HTML, CSS, JS", "-pas de backend", "-intégration web"],
        image: pricingComponent,
        href: "https://interactive-pricing-component-main-8t2fezeet-pimouxx.vercel.app/",
        deploy: 'Vercel'
    },
    {
        id: 2,
        title: "Calculatrice",
        description: ["-Niveau intermédiaire sur FrontendMentor", "-HTML, CSS, JS", "-3 thèmes de couleurs différent", "-pas de backend", "-intégration web"],
        image: calculator,
        href: "https://calculator-app-main-eight.vercel.app/",
        deploy: 'Vercel'
    },
    {
        id: 3,
        title: "Carte des Etats Unis",
        description: ["-4ème projet du FreeCodeCamp sur la visualisation de données", "-Librairie D3", "-2 appels API"],
        image: choropleth,
        href: "https://codepen.io/pimoux/full/mdVBLJx",
        deploy: null
    },
    {
        id: 4,
        title: "Horloge Pomodoro",
        description: ["-5ème projet du FreeCodeCamp sur les framework frontend", "-React (classes)", "-pas de backend"],
        image: pomodoro,
        href: "https://codepen.io/pimoux/full/gOaVzOW",
        deploy: null
    },
    {
        id: 5,
        title: "Application de chat",
        description: ["-beaucoup de fonctionnalités", "-React + socket.io", "-Nodejs + Express", "-système de salons"],
        image: chatApp,
        href: "https://stoic-panini-82e045.netlify.app/",
        deploy: "Heroku (back) + Netlify (front)"
    },
    {
        id: 6,
        title: "Todo List",
        description: ["-simple Todo List", "-React", "-json-server", "-CRUD"],
        href: null,
        image: todoList,
        deploy: "Vercel"
    },
]

export default projectList;