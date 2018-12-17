import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom';
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";

const Navbar = () => {
    return(
        <nav className="nav-wrapper pink">
            <div className="container">
                <a className="brand-logo white-text">UW Euchre</a>
                <SignedOutLinks />
                <SignedInLinks />
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/players">Players</NavLink></li>
                    <li><NavLink to="/games">Games</NavLink></li>
                </ul>

            </div>
        </nav>
    )
}
const mapStatetoProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStatetoProps)(Navbar);