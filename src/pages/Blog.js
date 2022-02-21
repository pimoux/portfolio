import React from 'react'
import BlogItem from '../components/BlogItem'

const Blog = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-8" id="blog">
            <h1 className="mainTitle">BLOG</h1>
            <p className="text-turquoise text-center mt-0">C'est dans cette section que je vous donne des informations sur les mises à jour du portfolio et mon évolution dans le domaine du développement web</p>
            <BlogItem title="Nouveaux projets et changements" createdAt="24 Août 2021">
                Global: <br />
                -Changement de la police en passant de Roboto Slab à Poppins
                <br /><br />
                Moi:<br />
                -texte remplacé par des icônes dans la partie compétences <br />
                -compétences spécifiques retirés <br />
                -ajout d'étoiles pour indiquer mes capacités sur la techno en question
                <br /> <br />
                Portfolio: <br />
                -Petit service d'upload de fichiers et page d'upload de fichiers retiré <br />
                -Ajout d'une Todo List, d'une application de chat et d'une calculatrice que j'aurai réalisé sur ces 2 derniers mois <br />
                -Texte des projets remplacés par des petits points <br />
                -Correction d'un problème d'exécution infini d'un useEffect
                <br /><br />
                Outside: <br />
                -Apprentissage et utilisation de Docker pour de futurs projets <br />
                -Apprentissage et utilisation de Wordpress (avec Docker pour setup le projet) <br />
                -Prochain projet: création d'un réseau social ? <br />
                <br /><br /><br />
            </BlogItem>
            <BlogItem title="Déploiement du portfolio" createdAt="30 Juin 2021">
                Portfolio déployé avec Vercel.  <br /><br />
                Code: <br />
                -Ajout de Tailwind<br />
                -Remplacer le CSS par des classes Tailwind<br /><br />
                Affichage: <br />
                -Changer le design de la page de contact<br />
                -Harmoniser la page à propos de moi (about) et la page principale<br />
                -Retirer la route /portfolio/project/:id et son composant<br />
                -Remplacer cette dernière par une fenêtre modale avec react-modal<br />
                -Ajout d'un nouvel assortiment de couleurs pour y intégrer un thème clair (styled-div)<br /><br /><br />
            </BlogItem>
        </div>
    )
}

export default Blog
