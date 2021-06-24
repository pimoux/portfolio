import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import links from "../../utils/links";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/home" className="nav-logo">
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
                    <div className="nav-icon" onClick={handleClick}>
                        {click ?
                            (<FontAwesomeIcon icon={faTimes} />) :
                            (<FontAwesomeIcon icon={faBars} />)}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;