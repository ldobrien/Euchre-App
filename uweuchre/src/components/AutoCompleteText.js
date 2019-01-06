import React, { Component } from 'react';

class AutoCompleteText extends Component {

    state = {
        suggestions: [],
        items: [
            "Suzie",
            "SSamm",
            "Lisa",
            "Bill"
        ],
        text: ''
    }

    handleChange = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.state.items.sort().filter(x => regex.test(x));
            
        }
        this.setState(() => ({
            suggestions,
            text: value
        }));
    }

    suggestionSelected(value){
        this.setState(()=>({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render(){
        const {text} = this.state;
        return(
            <div>
                <input type="text" autoComplete="off" value={text} name="winner1" placeholder="Winner" onChange={ this.handleChange} />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutoCompleteText;