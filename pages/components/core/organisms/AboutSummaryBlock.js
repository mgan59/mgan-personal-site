import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Need Some Molecules
// import Button from '../atoms/Button'
import SectionHeader from '../atoms/SectionHeader'

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

  h3{
    font-family: ${props => props.theme.fonts.secondaryHeader};
    margin:0; 
    padding:0;
    font-size: 1.4em;
  }
`

const BodyCopy = styled.p`
  font-size: 1em;
  color: #0c0524;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 300;
  padding: .6em .1em 1.6em .1em;
  line-height: 1.4em;
  margin: 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.2em;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size:1.4em;
  }
`

const AboutSummaryBlock = (props) => {
  return (
    <Frame>
      <SectionHeader>About Morgan</SectionHeader>

      <BodyCopy>I've been a startup founder, CTO, interim CEO, and Lead Engineer.  With 20 years of engineering experience working with earl-stage startups to global enterprise technical companies, and I still spend a significant amount of my time writing code and developing software.</BodyCopy>

      <BodyCopy>I've built products, managed teams, raised capital, and even sold a company.  Currently, I'm building gitBabel, a developer platform that helps engineering teams learn, grow, and collaborate.</BodyCopy>

    </Frame>
  )
}

// Set our prop-types when ready
AboutSummaryBlock.propTypes = {}

export default AboutSummaryBlock
