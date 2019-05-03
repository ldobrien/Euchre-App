import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteGame } from "../store/actions/gameActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"

class DeleteDatabase extends Component {

    onClick = (e) => {
        var gameKeys = Object.keys(this.props.games)
        gameKeys.forEach(game => {
            console.log(game)
            this.props.deleteGame(game)
        });
    }


    render(){
        return(
            <div className="container">
                <h5 className="red-text center-align">Only press this button if you want to delete the entire database</h5>
                <div className="center-align">
                    <button className="waves-effect waves-light red btn" onClick={ this.onClick }> Delete Database </button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        games: state.firestore.data.games
    }
} 
const mapDispatchtoProps = (dispatch) => {
    return {
        deleteGame: (game) => dispatch(deleteGame(game))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'games' }
    ])
)(DeleteDatabase);