import React, { Component } from 'react'
import axios from 'axios';

class AddPlayer extends Component {
    state = {
        Name:"",
        Skill:"",
        Submitted: 0
    }
    submitted = 0;
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/players', {
            Name: this.state.Name,
            Skill: this.state.Skill
        })
        .then(res => res.status === 200 ? this.setState({
            Submitted: 1
        }): -1);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const submitted = this.state.Submitted === 1 ? 
            <p>Player Sucessfully Added</p>
             : 
            <p>No Players Added</p>;
        return (
            <div className="container">
            <h1>Add Player</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Player</label>
                    <input type="text" onChange={this.handleChange} name="Name" placeholder="Name"/>
                    <input type="text" onChange={this.handleChange} name="Skill" placeholder="Skill"/>
                    <button type="submit"> Add </button>
                </form>
            {submitted}
            </div>
        )
    }
}

export default AddPlayer