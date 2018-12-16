import React, { Component } from 'react'
import { createPlayer } from "../store/actions/playerActions"
import { connect } from "react-redux";

class AddPlayer extends Component {
    state = {
        Name:"",
        Skill:""
        // Submitted: 0
    }
    submitted = 0;
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPlayer(this.state);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        // const submitted = this.state.Submitted === 1 ? 
        //     <p>Player Sucessfully Added</p>
        //      : 
        //     <p>No Players Added</p>;
        return (
            <div className="container">
            <h1>Add Player</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Player</label>
                    <input type="text" onChange={this.handleChange} name="Name" placeholder="Name"/>
                    <input type="text" onChange={this.handleChange} name="Skill" placeholder="Skill"/>
                    <button type="submit"> Add </button>
                </form>
            {/* {submitted} */}
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        createPlayer: (player) => dispatch({type: "CREATE_PLAYER", player})
        // createPlayer: (player) => dispatch(createPlayer(player))
    }
}

export default connect(null, mapDispatchtoProps)(AddPlayer)