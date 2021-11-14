import React from "react";
import ReactDOM from 'react-dom';
import AutoComplete from "./AutoComplete.js"

import "./styles.css";

function App() {
  return (
      
    <div className="App">

      <h2 className = "heading">Auto Complete Component </h2>
          <AutoComplete className =  "autocomplete"></AutoComplete>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
