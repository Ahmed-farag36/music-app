import React from 'react'
import PropTypes from 'prop-types'
import './MainContent.css'

const MainContent = props => {
  return (
    <main>
      {props.tracks.map((track, i) => (
        <div className="track" key={i}>
          <img src={track.albumArtSmall} alt={track.title} />
          <a href="http" className="link1">{track.title}</a>
          <a href="http" className="link2">{track.singer}</a>
        </div>
      ))}
    </main>
  )
}

MainContent.propTypes = {
  tracks: PropTypes.array.isRequired,
  view: PropTypes.string
}

export default MainContent
