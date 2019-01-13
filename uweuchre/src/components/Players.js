import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import AddPlayer from "./AddPlayer";
import Player from "./Player"

class Players extends Component {

    render(){
        
        const { players, auth, games } = this.props;
        if(!players){
            return <p></p>
        }
        // console.log(players.sort((a,b)=> (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0)))
        const playerList = Object.values(players).map(player => {
            const rank = player.Skill === "-" ? null : <p className="white-text">Rank: {player.Skill}</p>;
            return (
                <div className="post card pink" key={player.id}>
                    <div className="card-content">
                    <Link to={ '/players/' + player.id}>
                        <p className="card-title white-text">{player.Name}</p>
                        {rank}
                    </Link>
                    </div>
                </div>
            )
        })
        return(
            <div className="container">
            {auth.uid ? <AddPlayer/>: null}
                <h4 className="center">Players</h4>
                {playerList}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        players: state.firestore.ordered.players,
        auth: state.firebase.auth,
        games: state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'players' },
        { collection: 'games' }
    ])
)(Players)