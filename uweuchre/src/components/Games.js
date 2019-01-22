import React, { Component } from 'react'
import Game from './Game'
import AddGame from './AddGame';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Games extends Component {
    addGame = (game) => {
        // console.log("HERE")
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
        const gameList = this.props.games.map(game => {
            // console.log(game.date.toDate())
            return (
                <Game winner1={game.winner1} winner2={game.winner2}
                loser1={game.loser1} loser2={game.loser2} score={game.score} date={game.date} key={Math.random()} />
            )
        })
        gameList.sort(function(a,b){
            return  b.props.date.toDate() - a.props.date.toDate()
        })
        return(
            <div className="container">
                <h4 className="center">Games</h4>
                {auth.uid ? <AddGame addGame={this.addGame}/>: null}
                
                {gameList}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    // console.log(state.firestore.o)
    return{
        auth: state.firebase.auth,
        games: state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(Games)