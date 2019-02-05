import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PlayerStats from './PlayerStats';
import { addPlayerWeight } from "../store/actions/playerActions";
import Game from './Game'

class Player extends Component {
    saveWeight(props, weight){
        const a = this.props ? this.props.addPlayerWeight(this.props.player.Name, weight) : null;
    }

    render(){
        const { player, allGames } = this.props;
        const playersGames = allGames != null && player != null ? allGames.filter(function (game){
            var x = game.winner1 === player.Name ||
            game.winner2 === player.Name ||
            game.loser1 === player.Name ||
            game.loser2 === player.Name;
            return x;
        }): null;
        // console.log(playersGames)
        if(!player){
            return <p></p>
        }

        const gameList = playersGames == null ? null : playersGames.map(game => {
            return (
                <Game winner1={game.winner1} winner2={game.winner2}
                loser1={game.loser1} loser2={game.loser2} score={game.score} date={game.date} key={Math.random()} />
            )
        })

        return(
            <div>
                <div className="container" key={this.props.match.params.id}>
                    <div className="container">
                        <div className="card-content">
                            <div className="post card pink">
                                <div className="card-content">
                                    <p className="card-title white-text">Name: {player.Name}</p>
                                    <p className="player-skill white-text">Rank: {player.rank}</p>
                                    <PlayerStats 
                                        playerGames={allGames} 
                                        playerName={player.Name} 
                                        saveWeight={this.saveWeight}
                                        props={this.props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="center">Games</h4>
                    {gameList}
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state, ownProps) => {
    const id = ownProps.match.params.player_id;
    const players = state.firestore.data.players;
    const player = players ? players[id] : null;
    const allGames = state.firestore.ordered.games;
    
    return{
        player: player,
        allGames: allGames
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addPlayerWeight: (playerName, weight) => dispatch(addPlayerWeight(playerName, weight))
    }
}
export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' },
        { collection: 'games' }
    ])
)(Player)