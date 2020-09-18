import React, { Component } from 'react';

class Game extends Component {
	state = {
		months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
	}
    render(){
		var oldDate = this.props.date == null ? null : new Date(this.props.date);
		var newDate = ""
		if(oldDate){
			newDate = this.state.months[oldDate.getMonth()] + " " + oldDate.getDate() + " " + oldDate.getFullYear()
		}
        return(
			<div className="game card blue">
				<div className="card-content">
					<div className="winners-losers">
						<p className="winners white-text"><span className="winners-text">Winners: </span>
						{this.props.winner1 + ', ' + this.props.winner2}</p>
						<p className="losers white-text"><span className="losers-text">Losers: </span>
						{this.props.loser1 + ', ' + this.props.loser2}</p>
					</div>
					<p className="score white-text"><span className="score-text">Losers' score: </span>{this.props.score}</p>
					<p className="score white-text"><span className="score-text">Date: </span>
					{newDate}</p>
				</div>
			</div>
        )
    }
}
export default Game