import React, { Component } from 'react'
import { createPlayer } from "../store/actions/playerActions"
import { connect } from "react-redux";
import {Redirect } from "react-router-dom"
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';

class AddPlayer extends Component {
    state = {
        Name: null,
        Skill:"-",
        weight: 0,
        error: null,
        success: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.Name == null){
            this.setState({
                error: "No input received",
                success: null
            })
        }
        else if(this.props.players != null && this.props.players[this.state.Name]){
            this.setState({
                error: "Unable to Add Player: Player is not unique",
                success: null
            })
        } else {
            this.props.createPlayer(this.state);
            this.setState({
                error: null,
                success: "Player successfully added",
                Name: null,
                Skill: "-",
                weight: 0,
            })
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { auth } = this.props;
        if(!auth.uid) {
            return <Redirect to="/signin"/>
        }
        return (
            
            <div className="container">
            
            <h4 className="center">Add Player</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Player</label>
                    <input type="text" onChange={this.handleChange} name="Name" placeholder="Name"/>
                    <button type="submit"> Add </button>
                </form>
                <div className="red-text center">
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </div> 
                <div className="black-text center">
                    {this.state.success ? <p>{this.state.success}</p> : null}
                </div> 
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth,
        players: state.firestore.data.players
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        createPlayer: (player) => dispatch(createPlayer(player))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' }
    ]))(AddPlayer);