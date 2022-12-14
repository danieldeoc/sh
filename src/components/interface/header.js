import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1>Logo</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signIn">Sign Up</Link>
                    </li>
                </ul>
            </nav>
            <div className="clear"></div>
        </header>
    )
}

export default Header;