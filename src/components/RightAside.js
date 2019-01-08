import React from 'react'
import PropTypes from 'prop-types'
import './RightAside.css';

const RightAside = props => {
  return (
    <aside id="right-aside">
      <div id="activity">
        <h2>ACTIVITY</h2>
        {props.activities.map((activity, i) => (
          <a href="http" key={i}>{activity}</a>
        ))}
      </div>
      <div id="top-plays">
        <h2>TOP PLAYS</h2>
        {props.topPlays.map((topPlay, i) => (
          <div className="song" key={i}>
            <img src={topPlay.albumArtSmall} alt={topPlay.title} />
            <div>
              <a href="http">{topPlay.title}</a>
              <a href="http">{topPlay.singer}</a>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

RightAside.propTypes = {
  activities: PropTypes.array,
  topPlays: PropTypes.array
}

export default RightAside
