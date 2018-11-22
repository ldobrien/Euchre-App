import React, {Component} from 'react';
import axios from 'axios';

class Player extends Component {
    state={
        Name:"",
        Skill:""
    }
    componentDidMount(){
    
        let player_id= this.props.match.params.player_id
        axios.get('/api/players/' + player_id)
        .then(res => {
            console.log("Player " + res.data.Name);
            this.setState(
                res.data
            )
        })
    }
    render(){
        return(
            <div className="container post card pink" key={this.state.Name}>
                <div className="card-content">
                    <p className="card-title">Name: {this.state.Name}</p>
                    <p className="player-skill">Skill: {this.state.Skill}</p>
                </div>
            </div>
        )
    }
}

export default Player