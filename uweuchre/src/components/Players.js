import React, {Component} from 'react'
// import Player from './Player';
// import AddPlayer from './AddPlayer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import AddPlayer from "./AddPlayer";

class Players extends Component {

    render(){
        
        const { players, auth } = this.props;
        if(!players){
            return <p></p>
        }
        const playerList = Object.values(players).map(player => {
            // console.log(player.id)
            return (
                <div className="post card pink" key={player.id}>
                    <div className="card-content">
                    <Link to={ '/players/' + player.id}>
                        <p className="card-title white-text">{player.Name}</p>
                        <p className="white-text">{player.Skill}</p>
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
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(Players)
// export default connect(mapStatetoProps)(Players)