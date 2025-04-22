import { useState } from 'react';// Import Monaco Editor
import Editor from './components/code-editor';
import './App.css';

function App() {
  const handleClick = () => {
    window.callPythonFromJS(); // defined in index.html
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <span className="brackets">[</span>L<span className="brackets">]</span>udus
          </div>
          <ul className="nav-files">
            <div className="file-dropdown">
              <button className="file-button">
                Files
                <span className="file-icon">▽</span>
              </button>
              <div id="dropdown-content" className="file-options" style={{ display: 'none' }}>
                <a href="#">New File</a>
                <a href="#">Open File</a>
                <a href="#">Save</a>
                <a href="#">Save As</a>
                <hr className="dashed" />
                <a href="#">Exit</a>
              </div>
            </div>
            <button className="run-button" onClick={handleClick}>
              <li>▷ Run</li>
            </button>
          </ul>
        </div>

        <ul className="nav-links">
          <li><a href="lexerpage.html">Lexical</a></li>
          <li><a href="syntax.html">Syntax</a></li>
          <li><a href="semantic_page.html">Semantic</a></li>
        </ul>
      </nav>

      <div className="master_box">
        <div className='editor-container'>
        <div className='editor-wrapper'>
          <Editor/>
        </div>
        </div>
        

        <div className="lexeme_token">
          <div className="lexeme_token_inner">
            <div className="lexeme_master">
              <h2>Lexemes</h2>
              <div id="lexeme" className="lexeme"></div>
            </div>
            <div className="token_master">
              <h2>Tokens</h2>
              <div id="token" className="token"></div>
            </div>
          </div>

          <div className="error_box">
            <h2>Terminal</h2>
            <textarea id="error2" readOnly></textarea>
          </div>
          <div id="customConfirm" className="hidden">
            <div className="modal-content">
              <p id="confirmMessage">Are you sure?</p>
              <div className="modal-buttons">
                <button id="confirmYes" className="confirm-yes">Yes</button>
                <button id="confirmNo" className="confirm-no">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
