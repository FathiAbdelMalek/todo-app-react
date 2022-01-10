import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
