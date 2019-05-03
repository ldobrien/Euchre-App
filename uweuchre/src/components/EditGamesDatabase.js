import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import DeleteDatabase from './DeleteDatabase';
import { firestoreConnect } from 'react-redux-firebase';
import "../AutocompleteText.css"

class EditGamesDatabase extends Component {
    render(){
        return(
            <div className="container">
                <div className="card">
                    <h5 className="center">Games</h5>
                    <DeleteDatabase />
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

export default compose(
    connect(mapStatetoProps, null),
    firestoreConnect([
        { collection: 'games' }
    ])
)(EditGamesDatabase);