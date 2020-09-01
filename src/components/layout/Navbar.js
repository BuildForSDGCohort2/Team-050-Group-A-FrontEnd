import React from 'react'
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to='/'>
                <img src={logo} alt="Crimistry" style={{ width: '270px', height: '90px' }} />
            </Link>

            <ul className="main-menu">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/partners'>Partners</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
