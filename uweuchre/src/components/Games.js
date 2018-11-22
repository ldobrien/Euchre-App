import React, { Component } from 'react'
import Game from './Game'
import AddGame from './AddGame';
import axios from 'axios';

class Games extends Component {
    state ={
        listofGames: []
    }
    addGame = (game) => {
        let lst = this.state.listofGames;
        lst.push(game);
        this.setState({
            listofGames: lst
        })
    }
    componentDidMount(){
        axios.get('/api/games')
            .then(res => {
                this.setState({
                    listofGames: res.data
                })
            })
    }
    render(){
        const gameList = this.state.listofGames.map(game => {
            console.log(this.state.listofGames.length)
            return (
                
                <Game winner1={game.winner1} winner2={game.winner2}
                loser1={game.loser1} loser2={game.loser2} score={game.score} key={Math.random()} />
            )
        })
        return(
            <div className="container">
                <h4 className="center">Games</h4>
                <AddGame addGame={this.addGame}/>
                {gameList}
            </div>
        );
    }
}

export default Games