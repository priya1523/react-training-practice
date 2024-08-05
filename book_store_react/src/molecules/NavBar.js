//imports

import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return <nav>
        <hr></hr>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/book-list"}>Book Shop</Link>
            </li>
            <li>
                <Link to={"/orders"}>Orders</Link>
            </li>
            <li>
                <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
                <Link to={"/critique"}>Critique</Link>
            </li>
        </ul>
        <hr></hr>
    </nav>
}

export default NavBar