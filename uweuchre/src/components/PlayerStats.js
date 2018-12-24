import React, {Component} from 'react';
import Game from "./Game"

class PlayerStats extends Component {
    
    render(){

        const {playerGames, playerName} = this.props;
        const win = playerGames != null ? playerGames.filter(game => {
            return game.winner1 === playerName || game.winner2 === playerName;
        }) : null;
        const loss = playerGames != null ? playerGames.filter(game => {
            return game.loser1 === playerName || game.loser2 === playerName;
        }) : null;
        var plus = 0;
        var temp = win != null ? win.forEach(function(game) {
            plus += 10 - game.score;
        }) : 0;
        temp = loss != null ? loss.forEach(function(game) {
            plus += game.score - 10;
        }) : 0;

        var wins = win != null ? win.length : 0;
        var losses = loss != null ? loss.length : 0;
        var totalGames = wins != null || losses != null ? wins + losses : 0;
        var winLoss = totalGames != 0 ? wins * 100 / totalGames : 0;
        const plusMinus = plus > 0 ? <p>Plus-Minus: +{plus}</p> : <p>Plus-Minus: {plus}</p>
        
        return(
            <div>
                <p> Wins: {wins}</p>
                <p> Losses: {losses}</p>
                <p> Total Games: {totalGames}</p>
                <p> Win Loss Percentage: {winLoss}%</p>
                {plusMinus}
            </div>
        )
    }

}

export default PlayerStats;