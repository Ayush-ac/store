import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavItems from "../data/NavItems";
import logo from '../assets/logo_black.png'
import logoo from '../assets/logoo.png'
// import logo_black from '../assets/logo_black.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [toggler, setToggler] = useState(false);

    const changeToggle = () => {
        setToggler(!toggler);
    }

    const goToTopOfPage = () => {
        window.scrollTo(0, 0);
    }

    const closingNavItemAfterCLick = () => {
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
              <Link className="navbar__logoo" to="/" onClick={closingNavItemAfterCLick}>
                    <img src={logoo} alt="Woox Logo" />
                </Link>
                <Link className="navbar__logo" to="/" onClick={closingNavItemAfterCLick}>
                    <img src={logo} alt="Woox Logo" />
                </Link>

                <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                    {NavItems.map(({ id, itemName, itemURL }) => (
                        <li key={id} className="navbar__list__item text-dark">
                            <a href={itemURL} onClick={closingNavItemAfterCLick}>
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



                {/* Login and Book Now Buttons at the right end */}
                <div className="navbar__actions align-items-center">
                <a href="https://app.storepulse.ai/" className="navbar__action-btn login-btn d-none d-md-block">Login</a>
                    <div>
                        <a href="https://calendly.com/d/cm5h-3hh-gvq/storepulse-demo-discovery-call" className="navbar__action-btn booknow-btn"
                        
                        >Book Demo</a>
                    </div>
                </div>

                {/* Navbar Toggle for Mobile */}
                <div className={`navbar__toggler ${toggler ? "active" : ""}`} onClick={changeToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
