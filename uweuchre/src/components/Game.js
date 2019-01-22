import React, { Component } from 'react';

class Game extends Component {
    render(){
		// console.log(this.props)
        return(
            <div className="container">
				<div className="game card pink">
					<div className="card-content">
						<div className="winners-losers">
							<p className="winners white-text"><span className="winners-text">Winners: </span>
							{this.props.winner1 + ', ' + this.props.winner2}</p>
							<p className="losers white-text"><span className="losers-text">Losers: </span>
							{this.props.loser1 + ', ' + this.props.loser2}</p>
						</div>
						<p className="score white-text"><span className="score-text">Losers' score: </span>{this.props.score}</p>
						<p className="score white-text"><span className="score-text">Date: </span>{this.props.date.toDate().toString()}</p>
					</div>
				</div>
			</div>
        )
    }
}
export default Game