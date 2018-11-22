import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(this.state);
        axios.post('/api/games', {
            winner1: this.state.winner1,
            winner2: this.state.winner2,
            loser1: this.state.loser1,
            loser2: this.state.loser2,
            score: this.state.score,
            date: this.state.date
        })
        this.props.addGame(this.state);
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

export default AddGame