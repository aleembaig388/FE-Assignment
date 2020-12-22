import "./App.css";
import React, { useState } from "react";

const App = () => {

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isList, setIsList] = useState(false);

  const handleCommand = (command, value) => {
    document.execCommand(command, false, value);
  }

  return (
    <>
    <div id="wapper">
      <h1>FE Assignment (Editor)</h1>
      <div className="content-wapper">
        <div className="header-panel">
          <button className={ isBold ? "selected" : "" } title="Make Bold Highlighted Text" onClick={() => { handleCommand('bold'); setIsBold(!isBold); }}>Bold</button>
          <button className={ isItalic ? "selected" : "" } title="Make Italic Highlighted Text" onClick={() => { handleCommand('italic'); setIsItalic(!isItalic); }} >Italic</button>
          <button className={ isList ? "selected" : "" }  title="Make Unordered List of Highlighted Text"  onClick={() => { handleCommand('insertUnorderedList'); setIsList(!isList); }}>List</button>
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
