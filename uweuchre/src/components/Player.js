import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PlayerStats from './PlayerStats';

class Player extends Component {
    render(){
        const { player, allGames } = this.props;
        // console.log("ALL GAMES: ");
        // console.log(allGames)
        const playersGames = allGames != null && player != null ? allGames.filter(function (game){
            var x = game.winner1 === player.Name ||
            game.winner2 === player.Name ||
            game.loser1 === player.Name ||
            game.loser2 === player.Name;
            return x;
        }): null;
        // console.log(playersGames);
        if(!player){
            return <p></p>
        }
        return(
            
            <div className="container" key={this.props.match.params.id}>
            
                <div className="post card pink">
                    <div className="card-content">
                        <p className="card-title white-text">Name: {player.Name}</p>
                        <p className="player-skill white-text">Rank: {player.Skill}</p>
                        {console.log(allGames)}
                        <PlayerStats playerGames={allGames} playerName={player.Name}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state, ownProps) => {
    console.log(state.firestore.ordered.games);
    const id = ownProps.match.params.player_id;
    const players = state.firestore.data.players;
    const player = players ? players[id] : null;
    const allGames = state.firestore.ordered.games;
    
    return{
        player: player,
        allGames: allGames
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'players' },
        { collection: 'games' }
    ])
)(Player)