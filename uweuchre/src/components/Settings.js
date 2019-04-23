import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"

class Settings extends Component {
    state = {
        gamesPlayed: 15
    }

    handleChange = (e) => {
        const val = e.target;
        console.log(val)
        if(e != null && val != null){
            console.log(val)
            this.setState(() => ({
                gamesPlayed: val.value
            }));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Need to link to rankings
    }

    render(){
        const players = this.props.players == null ? null : Object.keys(this.props.players);
        return(
            <div className="container">
                <form id="form" onSubmit={ this.handleSubmit }>
                <div className="red-text center">
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </div>  
                <div className="black-text center">
                    {this.state.success ? <p>{this.state.success}</p> : null}
                </div>  
                <label >Minimum Number of Games Needed for Ranking</label>
                    <input
                        type="text"
                        autoComplete="off" 
                        name="Minimum Games Needed"
                        placeholder="Minimum Games Needed"
                        onChange={ this.handleChange } 
                        value={this.state.gamesPlayed} />
                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        players: state.firestore.data.players
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