import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePlayer } from "../store/actions/playerActions";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"

class DeletePlayer extends Component {

    onClick = (e) => {
        var playerKeys = Object.keys(this.props.players)
        playerKeys.forEach(player => {
            this.props.deletePlayer(player)
        });
    }


    render(){
        return(
            <div className="container z-depth-1">
                <h5 className="red-text center-align">Only press this button if you want to delete the entire player list</h5>
                <div className="center-align">
                    <button className="waves-effect waves-light red btn" onClick={ this.onClick }> Delete all Players </button>
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
        deletePlayer: (player) => dispatch(deletePlayer(player))
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(DeletePlayer);