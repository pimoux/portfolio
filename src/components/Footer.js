import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
const Footer = () => {
  const socialMedias = [
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/?hl=fr'
    },
    {
      name: 'VK',
      path: 'https://vk.com/?lang=fr'
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/luka-vouillemont-6051761b8/'
    }
  ]

  return (
    <footer className="footer">
      <div className="informationsFooter">
        <div className="icons">
          <h5 className="titleFooter">Réseaux sociaux</h5>
            {socialMedias.map((media, index) => {
              return (
                <a href={media.path} className='mediaLink' key={index}>
                  {media.name}
                </a>
              );
            })}
        </div>
        <div className="linksFooter">
          <h5 className="titleFooter">Liens</h5>
          <ul className="iconsList">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink exact to={link.path} className='FooterNavigation'>
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <h5>© 2021 - Luka Vouillemont</h5>
      </div>
    </footer>
  );
};

export default Footer;
