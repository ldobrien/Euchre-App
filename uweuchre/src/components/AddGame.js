import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';

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
        console.log(this.props.playerNames)
        if(this.props.players[this.state.winner1] && 
        this.props.players[this.state.loser1] &&
        this.props.players[this.state.winner2] &&
        this.props.players[this.state.loser2]){
            if(new Set([this.state.winner1, this.state.winner2, this.state.loser1, this.state.loser2]).size === 4){
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
            console.log(this.state.score);
            this.setState({
                error: "Score is not an Integer"
            })
        }
        
    }

    render(){
        const { auth } = this.props;
        return(
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                <div className="red-text center">
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </div>  
                    <label>Winner</label>
                    <input type="text" name="winner1" placeholder="Winner" onChange={ this.handleChange} />
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
    // console.log(state.firestore.data.players)
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