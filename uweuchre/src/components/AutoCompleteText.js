import React, { Component } from 'react';
import "../AutocompleteText.css"

class AutoCompleteText extends Component {

    state = {
        suggestions: [],
        // items: this.props.input,
        text: this.props.text,
    }

    handleChange = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0 && this.props.input != null){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.props.input.sort().filter(x => regex.test(x));
            
        }
        this.setState(() => ({
            suggestions,
            text: value
        }));
        this.props.onChange(e);
    }

    suggestionSelected(value){
        this.setState(()=>({
            text: value,
            suggestions: []
        }))
        this.props.suggestionSelected(this.props.name, value)
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul className="AutoCompleteText">
                {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render(){
        // console.log(this.state.text)
        const {text} = this.state;
        return(
            <div >
                {this.state.success != null ? this.clearform() : null}
                <input
                    type="text" 
                    autoComplete="off" 
                    value={text} 
                    name={ this.props.name } 
                    placeholder={ this.props.placeholder } 
                    onChange={ this.handleChange }/>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutoCompleteText;