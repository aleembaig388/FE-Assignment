import "./App.css";
import React from "react";

const App = () => {

  const handleCommand = (command, value) => {
    document.execCommand(command, false, value);
  }

  return (
    <>
    <div id="wapper">
      <h1>FE Assignment (Editor)</h1>
      <div className="content-wapper">
        <div className="header-panel">
          <button title="Make Bold Highlighted Text" onClick={() => { handleCommand('bold'); }}>Bold</button>
          <button title="Make Italic Highlighted Text" onClick={() => { handleCommand('italic'); }} >Italic</button>
          <button title="Make Unordered List of Highlighted Text"  onClick={() => { handleCommand('insertUnorderedList'); }}>List</button>
          <p><button title="Click Here to make URL" onClick={() => { handleCommand('createlink', document.getElementById('txtURL').value); }}>URL</button> <input id="txtURL" type="url" placeholder="www.example.com" /></p>
          <input type="color" id="colorPalette" onChange={(e) => { handleCommand('foreColor', e.target.value); }} name="colorPalette"/>
          </div>
        <div className="content-editor" contentEditable="true">
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
