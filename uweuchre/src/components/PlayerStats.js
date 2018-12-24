import React, {Component} from 'react';
import Game from "./Game"

class PlayerStats extends Component {
    
    render(){
        var plus = 0;
        var totalPoints = 0;
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
        });
        temp = loss == null ? 0 : loss.forEach(function(game) {
            plus += game.score - 10;
            totalPoints += Number(game.score);
        });

        var wins = win == null ? 0 : win.length;
        var losses = loss == null ? 0 : loss.length;
        var totalGames = wins != null || losses != null ? wins + losses : 0;
        var winLoss = totalGames != 0 ? wins * 100 / totalGames : 0;
        const plusMinus = plus > 0 ? <p>Plus-Minus: +{plus}</p> : <p>Plus-Minus: {plus}</p>
        var average = totalGames != 0 ? totalPoints / totalGames : 0;
        return(
            <div className="player-skill white-text">
            <br></br>
                <p> Wins: {wins}</p>
                <p> Losses: {losses}</p>
                <p> Total Games: {totalGames}</p>
                <p> Win Loss Percentage: {winLoss}%</p>
                {plusMinus}
                <p> Cumulative Average: {average}</p>
            </div>
        )
    }

}

export default PlayerStats;