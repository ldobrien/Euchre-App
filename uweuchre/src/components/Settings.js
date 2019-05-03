import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"
import RankSettings from './RankSettings';
import DeleteDatabase from './DeleteDatabase';
import DeletePlayers from './DeletePlayers';

class Settings extends Component {
    render(){
        return(
            <div>
            <RankSettings/>
            <br></br>
            <br></br>
            <div className="row">
            <div className="col s6">
            <DeleteDatabase />
            </div>
            <div className="col s6">
            <DeletePlayers />
            </div>
            </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        players: state.firestore.data.players
    }
} 
const mapDispatchtoProps = (dispatch) => {
    return {
        createGame: (game) => dispatch(createGame(game))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(Settings);