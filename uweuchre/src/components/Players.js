import React, {Component} from 'react'
// import Player from './Player';
// import AddPlayer from './AddPlayer';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Players extends Component {

    render(){
        const { players } = this.props;
        console.log(players);
        const playerList = Object.values(players).map(player => {
            console.log(player)
            return (
                <div className="post card pink" key={player.Name}>
                    <div className="card-content">
                    <Link to={ '/players/' + player.Name}>
                        <span className="card-title">{player.Name}</span>
                        <p>{player.Skill}</p>
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
        players: state.player.players
    }
}

export default connect(mapStatetoProps)(Players)