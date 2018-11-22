import React, { Component } from 'react';

class Game extends Component {
    state = {
        winners: [this.props.winner1, this.props.winner2],
        losers: [this.props.loser1, this.props.loser2],
        score: this.props.score,
        date: ""
    }
    render(){
        return(
            <div className="container">
                <div className="game card pink">
                    <p className="winners white-text">Winners</p>
                    <p>{this.state.winners[0] + ', ' + this.state.winners[1]}</p>
                    <p className="losers white-text">Losers</p>
                    <p>{this.state.losers[0] + ', ' + this.state.losers[1] + ': ' + this.state.score}</p>
                </div>
            </div>
        )
    }
}
export default Game