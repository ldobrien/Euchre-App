import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"
import RankSettings from './RankSettings';
import DeleteDatabase from './DeleteDatabase';
import DeletePlayers from './DeletePlayers';

class Settings extends Component {
    state = {
        authorized: false
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
        if(this.state.newUser.email == this.props.auth.email){
            this.setState({
                authorized: true
            })
        }
        
    }

    render(){
        if(this.state.authorized){
            return(
                <div>
                    <RankSettings/>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col s6">
                        <DeleteDatabase />
                        </div>
                        <div className="col s6">
                        <DeletePlayers />
                        </div>
                    </div> 
                </div>
            )
        } else {
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="white">
                <div className="input-field">
                    <div className="center">
                        <h5>Re-enter you email to access this page</h5>
                    </div>
                    <div className="container">
                        <label htmlFor="email">Re-enter your Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                        <button type="submit"> Confirm </button>
                    </div>
                </div>  
                </form>
            </div>
        );
            }
    }
}

const mapStatetoProps = (state) => {
    return{
        players: state.firestore.data.players,
        auth: state.firebase.auth
    }
} 
const mapDispatchtoProps = (dispatch) => {
    return {
        createGame: (game) => dispatch(createGame(game))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(Settings);