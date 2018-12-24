import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions"

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/add_account">Add Account</NavLink></li>
        <li><a onClick={props.signOut}>Sign Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchtoProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchtoProps)(SignedInLinks)