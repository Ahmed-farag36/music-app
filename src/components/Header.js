import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <header>
      <h1>MUSIC</h1>
      <h2>{props.selectedGenre || 'Genre'}</h2>
      <div>
        <button onClick={() => props.handleViewChange('headline')}><i className="icon-view_headline"></i></button>
        <button onClick={() => props.handleViewChange('list')}><i className="icon-view_list"></i></button>
        <button onClick={() => props.handleViewChange('module')}><i className="icon-view_module"></i></button>
      </div>
      <div>
        <i className="icon-search"></i>
        <input type="text" name="search" placeholder="Search all music" />
      </div>
    </header>
  )
}

Header.propTypes = {
  selectedGenre: PropTypes.string
}

export default Header
