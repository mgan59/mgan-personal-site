import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ContentFrame from '../templates/ContentFrame'

const QuoteContainer = styled.div`
  display: flex;  
  width:94%;
  position:relative;
  margin: 6em auto 2em auto;
  padding:3em 3em;
  background: #232130;
  box-shadow: 0px 4px 4px #1F184F;
  border-radius: 8px;


  span {
    color: #323232;
    font-size: 10em;
    font-family: 'Lora', serif;
    font-weight: 700;
    letter-spacing:.04em;
  }

  h2 {
    color: #fff;
    font-size: 4em;
    font-family: 'Lora', serif;
    font-weight: 500;
    font-style: italic;
    text-align:center;
    padding: 0 .06rem;
    letter-spacing:.04em;
  }
`

const QuoteBlock = (props) => {
  return (
    <ContentFrame>
      <QuoteContainer>
        <span>“</span>
        <h2>The only way to build software is together</h2>
        <span>”</span>
      </QuoteContainer>
    </ContentFrame>

  )
}

QuoteBlock.propTypes = {}

export default QuoteBlock
