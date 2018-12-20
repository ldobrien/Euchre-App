import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Player extends Component {
    render(){
        const { player } = this.props;
        if(!player){
            return <p></p>
        }
        return(
            <div className="container" key={this.props.match.params.id}>
                <div className="post card pink">
                    <div className="card-content">
                        <p className="card-title white-text">Name: {player.Name}</p>
                        <p className="player-skill white-text">Skill: {player.Skill}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state, ownProps) => {
    const id = ownProps.match.params.player_id;
    const players = state.firestore.data.players;
    const player = players ? players[id] : null;
    return{
        player: player
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(Player)