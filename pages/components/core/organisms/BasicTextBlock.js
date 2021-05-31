import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionHeader from '../atoms/SectionHeader'
import TextParagraph from '../atoms/TextParagraph'

const Frame = styled.div`
  display: flex;
  margin: .5em auto;
  
  width: 100%;
  max-width:1100px;
  
  margin: 0 auto;
  flex-direction:column;
  padding: 0 1em 1em 1em;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: 2em auto;
    padding: 0 2em 4em 2em;
  }
`

const BasicTextBlock = (props) => {
  const textParagraphs = []
  if (!props.text) {
    return null
  }
  props.text.forEach((textItem, i) => {
    textParagraphs.push(<TextParagraph key={i}>{textItem}</TextParagraph>)
  })
  return (
    <Frame>
      <SectionHeader textAlign='center'>{props.header}</SectionHeader>
      {textParagraphs}
    </Frame>
  )
}

// Set our prop-types when ready
BasicTextBlock.propTypes = {
  header: PropTypes.string,
  text: PropTypes.array

}

export default BasicTextBlock
