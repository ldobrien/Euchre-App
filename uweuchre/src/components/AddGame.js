import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";

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
        this.props.createGame(this.state);
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <label>Winner</label>
                    <input type="text" name="winner1" placeholder="Winner" onChange={ this.handleChange} />
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

const mapDispatchtoProps = (dispatch) => {
    return {
        // createGame: (game) => dispatch({type: "CREATE_GAME", game})
        createGame: (game) => dispatch(createGame(game))
    }
}

export default connect(null, mapDispatchtoProps)(AddGame);