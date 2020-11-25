import logo from './logo.svg';
import './App.css';
//import axios from 'axios'

function App() {

  return (
    <div className="App">
      <h1>MUSIC LIBRARY </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tara</h1>
        <p>
          this is <code>Taea.com/me</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <footer>Powered by: <a href="www.musixmatch.com">MusixMatch</a></footer>
    </div>
  );
}

export default App;
