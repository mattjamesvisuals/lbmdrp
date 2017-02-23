import React, { Component } from 'react';

class MyArtists  extends Component {

  deleteArtist(artist) {
    alert (artist)
  }

  artistItem(artist) {
    return (
      <div className="artist" key={artist}>
        <div className="artistName">
          {artist}
        </div>
        <div className="deleteIcon">
          <button className="close" onClick={this.deleteArtist}><img src="images/delete-icon2.png" height="25"/></button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="myartists displayBox">My Artists
        { this.props.artists.map((artist) => this.artistItem(artist)) }
      </div>
    )
  }
}
export default MyArtists;
