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
        if(e != null){
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    suggestionSelected = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var score = Number(this.state.score);
        var l1 = this.state.loser1;
        var l2 = this.state.loser2;
        var w1 = this.state.winner1;
        var w2 = this.state.winner2;

        // for testing
        if(w2 == "d1" && w1 == "d1" && l1 == "d1" && l2 == "d1"){
                this.setState({
                    success: "Game Added",
                    error: null,
                    winner1: ''
                })
                window.alert("Game Added")
                // document.getElementById("form").reset();
            }


        else if(this.props.players[w1] && 
            this.props.players[l1] &&
            this.props.players[w2] &&
            this.props.players[l2])
            {
            if(new Set([w1, w2, l1, l2]).size === 4){
                this.setState({
                    success: "Game Added",
                    error: null,
                })
                this.props.createGame(this.state);
                window.alert("Game added")
            } else{
                this.setState({
                    success: null,
                    error: "Players are not unique - no playing with yourself ;)"
                })
            }
        } else {
            this.setState({
                success: null,
                error: "At least one of the players is not valid"
            })
        }
        if(!((score < 10) && score >=0)){
            this.setState({
                success: null,
                error: "Score is invalid"
            })
        }
        else if(!(Number.isInteger(score))){
            this.setState({
                success: null,
                error: "Score is not an Integer"
            })
        }
        
    }

    render(){
        // console.log(this.state.success)
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
                    <label>Winner</label>
                    <AutoCompleteText 
                        input={players} 
                        name="winner1"
                        placeholder="Winner"
                        onChange={ this.handleChange } 
                        suggestionSelected={this.suggestionSelected}
                        text=""/>
                    <AutoCompleteText 
                        input={players} 
                        name="winner2"
                        placeholder="Winner"
                        onChange={ this.handleChange } 
                        suggestionSelected={this.suggestionSelected}/>
                    <label>Loser</label>
                    <AutoCompleteText 
                        input={players} 
                        name="loser1"
                        placeholder="Loser"
                        onChange={ this.handleChange } 
                        suggestionSelected={this.suggestionSelected}/>
                    <AutoCompleteText 
                        input={players} 
                        name="loser2"
                        placeholder="Loser"
                        onChange={ this.handleChange } 
                        suggestionSelected={this.suggestionSelected}/>
                    <label >Score</label>
                    <input type="text" name="score" autoComplete="off" placeholder="Loser's Score" onChange={ this.handleChange} />
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