import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import AutoCompleteText from './AutoCompleteText';

class AddGame extends Component {
    state = {
        winner1: "",
        winner2: "",
        loser1: "",
        loser2: "",
        score: null,
        date: new Date()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var score = Number(this.state.score);
        var l1 = this.state.loser1;
        var l2 = this.state.loser2;
        var w1 = this.state.winner1;
        var w2 = this.state.winner2;
        if(this.props.players[w1] && 
            this.props.players[l1] &&
            this.props.players[w2] &&
            this.props.players[l2]){
            if(new Set([w1, w2, l1, l2]).size === 4){
                this.props.createGame(this.state);
            } else{
                this.setState({
                    error: "Players are not unique - no playing with yourself ;)"
                })
            }
        } else {
            this.setState({
                error: "At least one of the players is not valid"
            })
        }
        if(!((score < 10) && score >=0)){
            this.setState({
                error: "Score is invalid"
            })
        }
        else if(!(Number.isInteger(score))){
            this.setState({
                error: "Score is not an Integer"
            })
        }
        
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                <div className="red-text center">
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </div>  
                    <label>Winner</label>
                    <AutoCompleteText />
                    {/* <input type="text" name="winner1" placeholder="Winner" onChange={ this.handleChange} /> */}
                    {/* {this.props.playerNames.includes(this.state.winner1) ? null : <p>NOT A PLAYER</p>} */}
                    <input type="text" name="winner2" placeholder="Winner" onChange={ this.handleChange} />
                    <label>Loser</label>
                    <input type="text" name="loser1" placeholder="Loser" onChange={ this.handleChange} />
                    <input type="text" name="loser2" placeholder="Loser" onChange={ this.handleChange} />
                    <label>Score</label>
                    <input type="text" name="score" placeholder="Loser's Score" onChange={ this.handleChange} />
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
)(AddGame);