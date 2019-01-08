import React from 'react'
import PropTypes from 'prop-types'
import './SongInfo.css'

const SongInfo = props => {
  return (
    <section id="song-info">
      <img src={props.albumArtBig} alt={props.title}/>
      <div>
        <h2>{props.title}</h2>
        <h3>{props.singer}</h3>
      </div>
    </section>
  )
}

SongInfo.propTypes = {
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  albumArtBig: PropTypes.string.isRequired
}

export default SongInfo
