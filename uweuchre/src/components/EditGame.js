import React, { Component } from 'react';
import { connect } from "react-redux";
import { editGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import "../AutocompleteText.css"

class EditGame extends Component {
    state = {
        winner1: this.props.winner1,
        winner2: this.props.winner2,
        loser1: this.props.loser1,
        loser2: this.props.loser2,
        score: this.props.score,
        date: this.props.date,
        suggestions: {
        }
    }

    componentDidMount(){
        console.log(this.props.games)
        var { players, games } = this.props
        players = this.props.players == null ? null : Object.keys(this.props.players);
        const game = games == null ? null : games[this.props.match.params.game_id]
        if (game !== null){
            this.setState(() => ({
                winner1: game.winner1,
                winner2: game.winner2,
                loser1: game.loser1,
                loser2: game.loser2,
                score: game.score
            }));
        }
    }

    handleChange = (e) => {
        if(e != null){
            const name = e.target.name
            const value = e.target.value;
            const players = Object.keys(this.props.players);
            let suggestions = [];
            if(value.length > 0 && players != null){
                const regex = new RegExp(`^${value}`, 'i');
                suggestions = players.sort().filter(x => regex.test(x));
            }
            this.setState(() => ({
                [name]: value,
                suggestions:{
                    [name]: suggestions
                },
            }));
        }
    }

    suggestionSelected(name, value){
        this.setState(()=>({
            suggestions:{
                [name]: []
            },
            [name]: value
        }))
    }

    renderSuggestions(name) {
        const suggestions = this.state.suggestions[name];
        if(suggestions == null || suggestions.length === 0){
            return null;
        }
        return(
            <ul className="AutoCompleteText" >
                {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSelected(name, item)}>{item}</li>)}
            </ul>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var score = Number(this.state.score);
        var l1 = this.state.loser1;
        var l2 = this.state.loser2;
        var w1 = this.state.winner1;
        var w2 = this.state.winner2;

        if(!(score < 10 && score >=0) || this.state.score.toString().length != 1){
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
        else if(this.props.players[w1] && 
            this.props.players[l1] &&
            this.props.players[w2] &&
            this.props.players[l2])
            {
            if(new Set([w1, w2, l1, l2]).size === 4){
                this.props.editGame(this.props.match.params.game_id, this.state);
                this.setState({
                    success: "Game Updated"
                })
                window.alert("Game Updated")
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
    
    }

    render(){
        var { players, games } = this.props
        players = this.props.players == null ? null : Object.keys(this.props.players);
        const game = games == null ? null : games[this.props.match.params.game_id]
        if(this.state.success === "Game Updated"){
            this.setState({
                success: null
            })
            return <Redirect to="/games" />
        }
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
                    <input
                        type="text"
                        autoComplete="off" 
                        input={players} 
                        name="winner1"
                        placeholder= "Winner"
                        onChange={ this.handleChange } 
                        value={this.state.winner1} />
                        {this.renderSuggestions("winner1")}
                    <input
                        type="text"
                        autoComplete="off" 
                        input={players} 
                        name="winner2"
                        placeholder="Winner"
                        onChange={ this.handleChange } 
                        value={this.state.winner2} />
                        {this.renderSuggestions("winner2")}
                    <input
                        type="text"
                        autoComplete="off" 
                        input={players} 
                        name="loser1"
                        placeholder="Loser"
                        onChange={ this.handleChange } 
                        value={this.state.loser1} />
                        {this.renderSuggestions("loser1")}
                    <input
                        type="text"
                        autoComplete="off" 
                        input={players} 
                        name="loser2"
                        placeholder="Loser"
                        onChange={ this.handleChange } 
                        value={this.state.loser2} />
                        {this.renderSuggestions("loser2")}
                    <label >Score</label>
                    <input 
                        type="text" 
                        name="score" 
                        autoComplete="off" 
                        placeholder="Loser's Score" 
                        value={this.state.score}
                        onChange={ this.handleChange} />
                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        players: state.firestore.data.players,
        games: state.firestore.data.games
    }
} 
const mapDispatchtoProps = (dispatch) => {
    return {
        editGame: (id, game) => dispatch(editGame(id, game))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' },
        { collection: 'games' }
    ])
) (EditGame);