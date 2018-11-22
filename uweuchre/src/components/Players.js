import React, {Component} from 'react'
import Player from './Player';
import AddPlayer from './AddPlayer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Players extends Component {
    state ={
        players: []
    }
    componentDidMount(){
        axios.get('/api/players')
            .then(res => {
                this.setState({
                    players: res.data
                })
            })
    }
    render(){
        const { players } = this.state;
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


export default Players