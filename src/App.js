import React, { Component } from 'react';
import Header from './components/Header'
import SongInfo from './components/SongInfo';
import Player from './components/Player';
import LeftAside from './components/LeftAside';
import MainContent from './components/MainContent';
import RightAside from './components/RightAside';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'module',
      tracks: [
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          genre: 'Pop',
          albumArtSmall: '/images/album-art_small.jpg',
          albumArtBig: '/images/album-art_big.jpg',
          songSrc: 'http://localhost:8887/kelly/Kelly-Clarkson-Stronger.mp3'
        },
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          genre: 'Pop',
          albumArtSmall: '/images/album-art_small.jpg',
          albumArtBig: '/images/album-art_big.jpg',
          songSrc: 'http://localhost:8887/kelly/Kelly-Clarkson-Stronger.mp3'
        },
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          genre: 'Pop',
          albumArtSmall: '/images/album-art_small.jpg',
          albumArtBig: '/images/album-art_big.jpg',
          songSrc: 'http://localhost:8887/kelly/Kelly-Clarkson-Stronger.mp3'
        }
      ],
      genresList: ['Rock', 'Pop', 'Jazz'],
      playlists: ["90's Music", "Inspirational", "My Top Rated"],
      activities: ['Arcade Fire announce New Album Release Date', 'Arcade Fire announce New Album Release Date'],
      topPlays: [
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          albumArtSmall: '/images/album-art_small.jpg'
        },
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          albumArtSmall: '/images/album-art_small.jpg'
        },
        {
          title: 'Stronger',
          singer: 'Kelly Clarkson',
          albumArtSmall: '/images/album-art_small.jpg'
        }
      ]
    };
  }

  handleViewChange = (view) => {
    this.setState({ view  })
  }

  render() {
    const {
      tracks,
      genresList,
      playlists,
      view,
      activities,
      topPlays
    } = this.state;
    return (
      <div id="app">
        <Header
          selectedGenre={tracks[0].genre}
          handleViewChange={this.handleViewChange}
        />
        <SongInfo
          title={tracks[0].title}
          singer={tracks[0].singer}
          albumArtBig={tracks[0].albumArtBig}
        />
        <Player
          songSrc={tracks[0].songSrc}
        />
        <LeftAside
          genresList={genresList}
          playlists={[playlists]}
        />
        <MainContent
          view= {view}
          tracks={tracks}
        />
        <RightAside
          activities= {activities}
          topPlays= {topPlays}
        />
      </div>
    );
  }
}

export default App;
