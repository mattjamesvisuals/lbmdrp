import React, { Component } from 'react';
import './App.css';
import './components/Logo/Logo.css';
import './components/SearchBar/SearchBar.css';
import './components/ArtistFeed/ArtistFeed.css';
import Logo from './components/Logo/Logo.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import ArtistFeed from './components/ArtistFeed/ArtistFeed.js';
import MyArtists from './components/MyArtists/MyArtists.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: "url('images/page_background.jpg')"}}>

          <Logo />
          <SearchBar />
          <ArtistFeed />
          <MyArtists artists={["Korn", "Life of Agony", "Toadies", "Creedence Clearwater Revival"]}/>

      </div>
    );
  }
}

export default App;
