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
					<div className="card-content">
						<div className="winners-losers">
							<p className="winners white-text"><span className="winners-text">Winners: </span>
							{this.state.winners[0] + ', ' + this.state.winners[1]}</p>
							<p className="losers white-text"><span className="losers-text">Losers: </span>
							{this.state.losers[0] + ', ' + this.state.losers[1]}</p>
						</div>
						<p className="score white-text"><span className="score-text">Losers' score: </span>{this.state.score}</p>
						
					</div>
				</div>
			</div>
        )
    }
}
export default Game