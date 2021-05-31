import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextParagraph = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size:1.5em;
  font-weight: 300;
`

// Set our prop-types when ready
TextParagraph.propTypes = { }

export default TextParagraph
