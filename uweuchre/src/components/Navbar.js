import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="nav-wrapper pink">
            <div className="container">
                <a className="brand-logo white-text center">UW Euchre</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/players">Players</NavLink></li>
                    <li><NavLink to="/games">Games</NavLink></li>
                    <li><NavLink to="/add">Add</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);