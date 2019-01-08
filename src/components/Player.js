import React from 'react'
import PropTypes from 'prop-types'
import './Player.css'

const Player = props => {
  return (
    <div id="player">
      <audio src={props.songSrc} controls></audio>
    </div>
  )
}

Player.propTypes = {
  songSrc: PropTypes.string.isRequired,

}

export default Player
