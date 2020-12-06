import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BadgeFrame = styled.div`
  
  width: 10em;
  border-radius: 8px;
  background-color: #50BEB8;
  padding: .5em 1em;

  span {
    font-family: 'Roboto Slab';
      color: #25716D;
  }
`

const Badge = (props) => {
  // add icon support here for github...
  return (
    <BadgeFrame>
      <span>{props.children}</span>
    </BadgeFrame>
  )
}

// Set our prop-types when ready
Badge.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default Badge
