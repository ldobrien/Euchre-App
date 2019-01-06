import React, {Component} from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { addAccount } from "../store/actions/authActions"

class AddAccount extends Component {
    state ={
        newUser: {
            username: '',
            password: ''
        },
        submitted: false
    }

    handleChange = (e) => {
        this.setState({
            newUser:{
                ...this.state.newUser,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAccount(this.state.newUser)
        this.setState({
            submitted: true
        })
    }

    render(){
        const { auth, authError } = this.props;
        if(!auth.uid){
            return <Redirect to="/signin"/>
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add Account</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink">Sign Up</button>
                    </div>
                </form>
                <div className="red-text center">
                {this.state.submitted ? 
                authError ? <p>{authError}</p> : <p>Account Created</p>: null}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addAccount: (user) => dispatch(addAccount(user))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AddAccount);