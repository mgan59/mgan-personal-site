import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ContentFrame from '../templates/ContentFrame'

const QuoteContainer = styled.div`
  display: flex;  
  width:94%;
  position:relative;
  margin: 1em auto 1em auto;
  padding:1em 1em;
  background: #232130;
  box-shadow: 0px 4px 4px #1F184F;
  border-radius: 8px;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media(min-width: 601px) {
      margin: 2em auto 2em auto;
      padding:3em 3em;
      
    }
    /* larger desktops */ }
    @media(min-width: 801px) {

    }


  h2 {
    color: #fff;
    font-size: 1.8em;

    font-family: 'Lora', serif;
    font-weight: 500;
    font-style: italic;
    text-align:center;
    padding: 0 .06rem;
    margin: 0;
    letter-spacing:.04em;

    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media(min-width: 601px) {
      font-size: 1.9em;
    }
    /* larger desktops */ }
    @media(min-width: 801px) {
      font-size: 2.5em;
      
    }
  }
`

const QuoteTickStart = styled.span`
  color: #ccc;
    font-size: 2em;
    font-family: 'Lora', serif;
    font-weight: 700;
    letter-spacing:.04em;

    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media(min-width: 601px) {
      font-size: 3em;
    }
    /* larger desktops */ }
    @media(min-width: 801px) {
      font-size: 4em;
      
    }
`

const QuoteTickEnd = styled.span`
  color: #ccc;
  font-size: 2em;
  font-family: 'Lora', serif;
  font-weight: 700;
  letter-spacing:.04em;
  display:flex;
  align-self:flex-end;
  justify-content: flex-end;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size: 3em;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size: 4em;
    
  }
`

const QuoteBlock = (props) => {
  return (
    <ContentFrame>
      <QuoteContainer>
        <QuoteTickStart>“</QuoteTickStart>
        <h2>The only way to build software is together</h2>
        <QuoteTickEnd>”</QuoteTickEnd>
      </QuoteContainer>
    </ContentFrame>

  )
}

QuoteBlock.propTypes = {}

export default QuoteBlock
