import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Roboto Slab Bold
const SectionHeader = styled.h2`
  color: #333;
  font-family: ${props => props.theme.fonts.primaryHeader};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  font-size:1.7em;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:2.6em;
    
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`

// Set our prop-types when ready
SectionHeader.propTypes = {
  textAlign: PropTypes.string
}

export default SectionHeader
