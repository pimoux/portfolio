import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
const Footer = () => {
  const socialMedias = [
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/luka.vmt/'
    },
    {
      name: 'VK',
      path: 'https://vk.com/pimoux'
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/luka-vouillemont-6051761b8/'
    }
  ]

  return (
    <footer className="flex flex-col w-full h-auto bg-dark border-t-2 border-grayish-light">
      <div className="flex justify-around items-start w-full border-b-2 border-grayish">
        <div className="flex flex-col items-center h-full leading-7">
          <h5 className="text-center text-turquoise mt-2">Réseaux sociaux</h5>
            {socialMedias.map((media, index) => {
              return (
                <a href={media.path} className='no-underline text-grayish-light my-3' key={index} target="_blank" rel="noreferrer">
                  {media.name}
                </a>
              );
            })}
        </div>
        <div className="flex flex-col">
          <h5 className="text-center text-turquoise mt-2">Liens</h5>
          <ul className="text-center p-0 list-none leading-6">
            {links.map((link, index) => {
              return (
                <li key={index} className={index === links.length - 1 ? 'mb-4' : 'my-2'}>
                  <NavLink exact to={link.path} className='no-underline text-grayish-light'>
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center text-turquoise bg-dark h-auto md:h-full py-2">
        <h5>© 2021 - Luka Vouillemont</h5>
      </div>
    </footer>
  );
};

export default Footer;
