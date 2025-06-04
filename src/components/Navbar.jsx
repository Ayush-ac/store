import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavItems from "../data/NavItems";
import logo from '../assets/logo_black.png'
import logoo from '../assets/logoo.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [toggler, setToggler] = useState(false);

    const changeToggle = () => {
        setToggler(!toggler);
    }

    const goToTopOfPage = () => {
        window.scrollTo(0, 0);
    }

    const closingNavItemAfterClick = () => {
        setToggler(false);
        goToTopOfPage();
    }

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        // Close navbar when scrolling
        setToggler(false);
    };

    const handleClickOutside = (e) => {
        const navbar = document.getElementById('navbar');
        if (navbar && !navbar.contains(e.target)) {
            setToggler(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
    };
}, []);


    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                <Link className="navbar__logoo" to="/" onClick={closingNavItemAfterClick}>
                    <img src={logoo} alt="Woox Logo" />
                </Link>
                <Link className="navbar__logo" to="/" onClick={closingNavItemAfterClick}>
                    <img src={logo} alt="Woox Logo" />
                </Link>

                <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                    {NavItems.map(({ id, itemName, itemURL }) => (
                        <li key={id} className="navbar__list__item text-dark">
                            <a href={itemURL} onClick={closingNavItemAfterClick}>
                                {itemName}
                            </a>
                        </li>
                    ))}

                    <li className="navbar__list__item">
                        <a href="https://app.storepulse.ai/" className="navbar__action-btn login-btn d-block d-md-none">
                            Login
                        </a>
                    </li>
                </ul>

                <div className="navbar__actions align-items-center">
                    <a href="https://app.storepulse.ai/" className="navbar__action-btn login-btn d-none d-md-block">Login</a>
                    <div>
                        <a href="https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call" className="navbar__action-btn booknow-btn">
                            Book Demo
                        </a>
                    </div>
                </div>

                <div className={`navbar__toggler ${toggler ? "active" : ""}`} onClick={changeToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;