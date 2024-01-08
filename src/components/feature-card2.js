import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="feature-card2-icon">
        <path
          d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
          className=""
        ></path>
      </svg>
      <div className="feature-card2-container">
        <h2 className="feature-card2-text">{props.title}</h2>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Ránézésre arányos rajzokat tudsz készíteni',
  rootClassName: '',
}

FeatureCard2.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard2
