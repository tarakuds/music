import logo from './logo.svg';
import './App.css';
import Tracklist from './components/tracklist'
import { useState } from 'react';
//import axios from 'axios'

function App() {
    // const API_URL='https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1?format=json&apikey=1638fe563a3c3038628e2462ec04af8a'

    // axios.get(API_URL).then(function(response){
    //     console.log(response)
    // });

  const [showValue, setValue]=useState(false)

  function click(){
    console.log('say Hello')
    setValue(!showValue)
}

  return (
    <div className="App">
      <h1>MUSIC LIBRARY </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Tracklist onClick={click} /> */}
        <button onClick={click}>View Playlist</button>
      </header>

      {showValue &&(
        <>
            <h3>This Are US Top 10 Tracks</h3>
            <Tracklist value="Demeor SHaw"></Tracklist>
            <Tracklist value="Kendrick Lemar"></Tracklist>
        </>
      )}

      <footer>Powered by: <a href="www.musixmatch.com">MusixMatch</a></footer>
    </div>
  );
}

export default App;
