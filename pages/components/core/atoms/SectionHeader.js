import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Roboto Slab Bold
const SectionHeader = styled.h2`
  color: #333;
  font-family: ${props => props.theme.fonts.secondaryHeader};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  padding-top:.4em;
  font-size:1.5em;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:2.2em;
    padding-top:0;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    padding-top:0;
  }
`

// Set our prop-types when ready
SectionHeader.propTypes = {
  textAlign: PropTypes.string
}

export default SectionHeader
