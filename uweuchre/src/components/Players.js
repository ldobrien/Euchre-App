import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import AddPlayer from "./AddPlayer";
import { addPlayerWeight, addPlayerRank } from "../store/actions/playerActions";
// import Player from "./Player"

class Players extends Component {
    state = {
        weightList: [],
        mounted: false
    }
    componentDidMount(){
        this.setState({
            mounted: true
        })
    }
    componentWillMount(){
        this.addWeights();
        this.addRanks();
    }
    addWeights = async () => {
        const { players, auth, games } = this.props;
        if(!players){
            return <p></p>
        }
        for(var p of players){
            var win = games == null ? null :
                games.filter(game => {
                return (game.winner1 == p.Name || game.winner2 == p.Name)
            })
            var loss = games == null ? null :
                games.filter(game => {
                return (game.loser1 == p.Name || game.loser2 == p.Name)
            })

            var plus = 0;
            var totalPoints = 0;
            var temp;
            var temp = win == null ? 0 : win.forEach(function(game) {
                plus += 10 - game.score;
                totalPoints += 10;
            });
            temp = loss == null ? 0 : loss.forEach(function(game) {
                plus += game.score - 10;
                totalPoints += Number(game.score);
            });
            var winsize = win === null ? 0 : win.length;
            var losssize = loss == null ? 0 : loss.length;

            var totalGames = winsize + losssize;
            var winLoss = totalGames != 0 ? winsize * 100 / totalGames : 0;
            var average = totalGames != 0 ? totalPoints / totalGames : 0;
            const weight = totalGames > 14 ? winLoss * .002 + average * .08 : 0;
            temp = this.props ? this.props.addPlayerWeight(p.Name, weight) : null;
        }
    }

    addRanks = async () =>{
        const { players, auth, games } = this.props;
        if(!players){
            return <p></p>
        }
        var playerRanks = players.filter(p => p.weight != 0);
        if(this.state.mounted && playerRanks.length != 0){
            var sorted = playerRanks.slice().sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0))
            var ranks = playerRanks.slice().map(function(v){ return sorted.indexOf(v)+1 });
            for(var index in sorted){
                var temp = this.props ? this.props.addPlayerRank(playerRanks[index].Name, ranks[index]) : null;
            }
            this.setState({
                mounted: false
            })
        }
    }
    
    render(){
        const { players, auth, games } = this.props;
        if(!players){
            return <p></p>
        }
        
        const playerList = Object.values(players).map(player => {
            const rank = player.weight === 0 ? null : <p className="white-text">Rank: {player.rank}</p>;
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
                <div className="container">
					<div className="card-content">
                    {playerList}
				    </div>
			    </div>
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
const mapDispatchtoProps = (dispatch) => {
    return {
        addPlayerWeight: (playerName, weight) => dispatch(addPlayerWeight(playerName, weight)),
        addPlayerRank: (playerName, weight) => dispatch(addPlayerRank(playerName, weight))
    }
}
export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' },
        { collection: 'games' }
    ])
)(Players)