import React from 'react'
import styled from 'styled-components'

const BodyText = styled.p`
  font-size: ${props => props.theme.fontSize.bodyMobile};
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.body};
  font-weight: 300;
  padding: .6em .1em 1.6em .1em;
  line-height: 1.4em;
  margin: 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size: ${props => props.theme.fontSize.bodyTablet};
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size: ${props => props.theme.fontSize.bodyDesktop};
  }
`

export default BodyText
