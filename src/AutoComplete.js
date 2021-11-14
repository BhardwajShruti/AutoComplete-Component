import React, { Component, Fragment } from "react";
import axios from 'axios';
class Autocomplete extends Component {
  


  constructor(props) {
    super(props);
 
    this.state = {
         suggestions  :[],
        
      // The active selection's index
      selectedWord: 0,
      // The suggestions that match the user's input
      suggestedWords: [],
      // Whether or not the suggestion list is shown
      showWords: false,
      // What the user has entered
      inputText: ""
    };
  }
async componentDidMount(){
  await this.loadWords();
}
 loadWords = async() =>{
  try {
    const response = await axios.get('https://random-word-api.herokuapp.com/word?number=10000');
    console.log(response);
    this.setState({
      suggestions :  response.data
    })
  } catch (error) {
    console.error(error);
  }
  }
  onChange = e => {
    const { suggestions } = this.state;
    const inputText = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const suggestedWords = this.state.suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().includes(inputText.toLowerCase())
    );
    this.setState({
      selectedWord: 0,
      suggestedWords,
      showWords: true,
      inputText: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      selectedWord: 0,
      suggestedWords: [],
      showWords: false,
      inputText: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { selectedWord: selectedWord, suggestedWords } = this.state;

    //  enter key
    if (e.keyCode === 13) {
      this.setState({
        selectedWord: 0,
        showWords: false,
        inputText: suggestedWords[selectedWord]
      });
    }
    //  up arrow
    else if (e.keyCode === 38) {
      if (selectedWord === 0) {
        return;
      }

      this.setState({ selectedWord: selectedWord - 1 });
    }
    // down arrow
    else if (e.keyCode === 40) {
      if (selectedWord +1 === suggestedWords.length) {
        return;
      }

      this.setState({ selectedWord: selectedWord + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        selectedWord: selectedWord,
        suggestedWords,
        showWords,
        inputText
      }
    } = this;

    let wordsList;

    if (showWords && inputText) {
      if (suggestedWords.length) {
        wordsList = (
          <ul class="suggestions">
            {suggestedWords.map((suggestion, index) => {
              let className;

              
              if (index === selectedWord) {
                className = "suggestion-active";
              }
              else{
                className = "suggestion-inactive";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  <span>{suggestion.substr(0,suggestion.indexOf(inputText))}</span>
                  <span className = {"highlighted"}>{inputText}</span>
                  <span>{suggestion.substr((suggestion.indexOf(inputText)+inputText.length),suggestion.length)}</span>
                </li>
              );
            })}
          </ul>
        );
      } 
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputText}
        />
        {wordsList}
      </Fragment>
    );
  }
}

export default Autocomplete;
