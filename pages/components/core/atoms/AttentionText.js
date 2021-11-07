import React from 'react'
import styled from 'styled-components'

const AttentionText = styled.p`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.textInactive};
  // Current base mobile is 1em, so we stagger everything by .3em
  font-size: 1.3em;
  font-style: italic;
  font-weight: 500;
  margin: .8em 0 1em 0;
  padding: 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  // Current base tablet,desktop is 1.2em/1.3em, so we stagger everything by .3em
  @media(min-width: 601px) {
    font-size: 1.5em;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size: 1.6em;
  }
`

export default AttentionText


