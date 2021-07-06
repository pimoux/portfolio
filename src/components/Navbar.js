import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import links from "../utils/links";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="h-20 flex justify-center items-center sticky top-0 z-20 bg-dark text-xl">
                <div className="flex items-center justify-between w-full h-20 max-w-screen-2xl">
                    <NavLink exact to="/home" className="items-center cursor-pointer no-underline ml-5 text-turquoise hover:text-turquoise-dark text-4xl">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {links.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <NavLink
                                        exact
                                        to={item.path}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="nav-icon mt-2" onClick={handleClick}>
                        {click ?
                            (<FontAwesomeIcon icon={faTimes} className="hover:text-turquoise-dark"/>) :
                            (<FontAwesomeIcon icon={faBars} className="hover:text-turquoise-dark" />)}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;