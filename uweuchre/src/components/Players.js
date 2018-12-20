import React, {Component} from 'react'
// import Player from './Player';
// import AddPlayer from './AddPlayer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Players extends Component {

    render(){
        const { players } = this.props;
        if(!players){
            return <p></p>
        }
        // console.log(players);
        const playerList = Object.values(players).map(player => {
            console.log(player.id)
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
                <h4 className="center">Players</h4>
                {playerList}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        players: state.firestore.ordered.players
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(Players)
// export default connect(mapStatetoProps)(Players)