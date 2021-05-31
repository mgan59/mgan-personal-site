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

const ApprenticeshipMultiText = (props) => {
  const textParagraphs = []
  const textKeywordDescriptions = []
  props.textIntro.forEach((textItem, i) => {
    textParagraphs.push(<TextParagraph key={i}>{textItem}</TextParagraph>)
  })

  props.textKeywordDescriptions.forEach((textItem, i) => {
    textKeywordDescriptions.push(<div key={i}>
      <h3 style={{ fontSize: '1.4em' }}>{textItem.keyword}</h3>
      <TextParagraph>{textItem.description}</TextParagraph>

    </div>)
  })

  return (
    <Frame>
      <SectionHeader textAlign='center'>{props.header}</SectionHeader>
      {textParagraphs}
      {textKeywordDescriptions}
    </Frame>
  )
}

// Set our prop-types when ready
ApprenticeshipMultiText.propTypes = {
  header: PropTypes.string,
  textIntro: PropTypes.string,
  textKeywordDescriptions: PropTypes.array,
  cta: PropTypes.object
}

export default ApprenticeshipMultiText
