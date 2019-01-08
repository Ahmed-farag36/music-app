import React from 'react'
import PropTypes from 'prop-types'
import './LeftAside.css';

const LeftAside = props => {
  return (
    <aside id="left-aside">
      <div id="genres">
        <h2>GENRES<i className="icon-add_circle"></i></h2>
        {props.genresList.map((genre, i) => (
          <a href="http" key={i}>{genre}</a>
        ))}
      </div>
      <div id="playlists">
        <h2>PLAYLISTS<i className="icon-add_circle"></i></h2>
        {props.playlists.map((playlist, i) => (
          <a href="http" key={i}>{playlist}</a>
        ))}
      </div>
    </aside>
  )
}

LeftAside.propTypes = {
  genresList: PropTypes.array,
  playlists: PropTypes.array
}

export default LeftAside
