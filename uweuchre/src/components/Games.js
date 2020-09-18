import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Game from './Game'
import AddGame from './AddGame';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class Games extends Component {
    addGame = (game) => {
        let lst = this.state.listofGames;
        lst.push(game);
        this.setState({
            listofGames: lst
        })
    }

    render(){
        const { auth } = this.props;
        if(!this.props.games){
            return <p></p>
        }
        let games = this.props.games.slice().sort((a,b)=> {
            if(a.date < b.date) return 1;
            else return -1;
        });
        const gameList = games.map((game, index) => {
            return (
                <div className="col s4" key={index}>
                    <Link to={ '/games/' + game.id} key={game.id}>
                        <Game winner1={game.winner1} winner2={game.winner2}
                            loser1={game.loser1} loser2={game.loser2} 
                            score={game.score} date={game.date} key={game.id} />
                    </Link>
                </div>
                
            )
        })
        return(
            <div className="container">
                <h4 className="center">Games</h4>
                {auth.uid ? <AddGame addGame={this.addGame}/>: null}
                <div className="row">
                    {gameList}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        auth: state.firebase.auth,
        games: state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([{
        collection: 'games',
        orderBy: ["date", "desc"]
    }])
)(Games)