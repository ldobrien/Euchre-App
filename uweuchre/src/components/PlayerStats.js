import React, {Component} from 'react';
import Game from "./Game"

class PlayerStats extends Component {
    
    render(){
        var plus = 0;
        var totalPoints = 0;
        var skunks = 0;
        var timesskunked = 0;
        const {playerGames, playerName} = this.props;
        const win = playerGames == null ? null : playerGames.filter(game => {
            return game.winner1 === playerName || game.winner2 === playerName;
        });
        const loss = playerGames == null ? null : playerGames.filter(game => {
            return game.loser1 === playerName || game.loser2 === playerName;
        });
        
        var temp = win == null ? 0 : win.forEach(function(game) {
            plus += 10 - game.score;
            totalPoints += 10;
            skunks += Number(game.score) === 0 ? 1 : 0;
        });
        temp = loss == null ? 0 : loss.forEach(function(game) {
            plus += game.score - 10;
            totalPoints += Number(game.score);
            timesskunked += Number(game.score) === 0 ? 1 : 0;
        });

        var wins = win == null ? 0 : win.length;
        var losses = loss == null ? 0 : loss.length;
        var totalGames = wins != null || losses != null ? wins + losses : 0;
        var winLoss = totalGames != 0 ? wins * 100 / totalGames : 0;
        const plusMinus = plus > 0 ? <span>+{plus}</span> : <span>{plus}</span>
        var average = totalGames != 0 ? totalPoints / totalGames : 0;
        return(
            <div className="player-skill white-text">
            <br></br>
                <p> Wins: {wins}</p>
                <p> Losses: {losses}</p>
                <p> Total Games: {totalGames}</p>
                <p> Win Loss Percentage: {Math.round(winLoss * 100) / 100}%</p>
                <p>Plus-Minus: {plusMinus}</p>
                <p> Cumulative Average: {Math.round(average * 100) / 100}</p>
                <br></br>
                <p> Skunks: {skunks}</p>
                <p> Times Skunked: {timesskunked}</p>
            </div>
        )
    }

}

export default PlayerStats;