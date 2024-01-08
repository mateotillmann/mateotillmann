import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://....com"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text}
      </a>
      <span className="navigation-links-text">{props.text1}</span>
      <span className="navigation-links-text1">{props.text2}</span>
      <span className="navigation-links-text2">{props.text3}</span>
      <span className="navigation-links-text3">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Team',
  rootClassName: '',
  text2: 'Pricing',
  text1: 'Features',
  text: 'About',
  text4: 'Blog',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
