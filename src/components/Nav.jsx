import {useEffect, useState} from "react";

import Logo from "../images/logo.png"
import Avatar from "../images/avatar.png"

const Nav = () => {
    const [show, setShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)

        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav-contents">
                <img src={Logo} alt="logo" className="nav-logo"/>

                <img src={Avatar} alt="avatar" className="nav-avatar"/>
            </div>

        </div>
    );
};

export default Nav;
