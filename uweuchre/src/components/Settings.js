import React, { Component } from 'react';
import { connect } from "react-redux";
import { createGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"
import RankSettings from './RankSettings';
import DeleteDatabase from './DeleteDatabase';

class Settings extends Component {
    render(){
        return(
            <div>
            <RankSettings/>
            <br></br>
            <br></br>
            <DeleteDatabase />
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