import React from 'react'
import BlogItem from '../components/BlogItem'

const Blog = () => {
    return (
        <div className="blog-container">
            <h1 className="mainTitle">BLOG</h1>
            <p className="blog-disclaimer">C'est dans cette section que je vous donne des informations sur les mises à jour du portfolio</p>
            <BlogItem title="Déploiement du portfolio" createdAt="30 Juin 2021">
                Portfolio déployé avec Vercel.  <br /><br />
                Code: <br />
                -Ajout de packages, notamment Tailwind et AlpineJS<br />
                -Remplacer le CSS par des classes Tailwind<br /><br />
                Affichage: <br />
                -Changer le design de la page de contact<br />
                -Harmoniser la page à propos de moi (about) et la page principale<br />
                -Retirer la route /portfolio/project/:id et son composant<br />
                -Remplacer cette dernière par une fenêtre modale avec Alpine<br />
                -Ajout d'un nouvel assortiment de couleurs pour y intégrer un thème clair<br />
            </BlogItem>
        </div>
    )
}

export default Blog
