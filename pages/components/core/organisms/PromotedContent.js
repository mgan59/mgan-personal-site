import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Need Some Molecules
import BodyText from '../atoms/BodyText'
import AttentionText from '../atoms/AttentionText'
import SectionHeader from '../atoms/SectionHeader'
// import ServiceHeader from '../molecules/ServiceHeader'

// import NavMenu from '../molecules/NavMenu'

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
    padding: 0 2em 1em 2em;
  }
`

const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4em 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: 0 0 5em 0;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`


const SpecificSolutions = styled.div`
  display: flex;
`
const SolutionSet = styled.div`
  display: flex
  flex-direciton: column;
  flex-basis: 48%;

  h3 {
    font-family: ${props => props.theme.fonts.accent};
    font-weight: 700;
    font-size: ${props => props.theme.fontSize.bodyTablet};
    font-style: italic;
    margin: .1em 0 .6em 0;
    padding: 0 0;
    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media(min-width: 601px) {
      font-size:1.1em;
    }
    /* larger desktops */ }
    @media(min-width: 801px) {
        font-size:1.3em;
    }
  }

  ul {
      margin: 0 0 0 0;
      padding: 0;  
      
  }

  

  li {
      color: ${props => props.theme.colors.body};
      margin: 0 0 0 1.4em ;
      padding: 0 0 .4em 0;
      font-weight: 300;
      /* tablet, landscape iPad, lo-res laptops ands desktops */ }
        @media(min-width: 601px) {
            font-size: ${props => props.theme.fontSize.bodyTablet};
        }
        /* larger desktops */ }
        @media(min-width: 801px) {
            font-size: ${props => props.theme.fontSize.bodyDesktop};
        }
  }
`
const PromotedContent = (props) => {
  return (
    <Frame>
      
      <SpecificSolutions>
        <SolutionSet>
          <h3>FCTO</h3>
          <ul>
            <li>Full-Stack Software Development</li>
            <li>UX/UI Design</li>
            <li>Code Reviews</li>
            <li>Architecture Reviews</li>
            <li>Design Ops</li>
          </ul>
        </SolutionSet>
        <SolutionSet>
          <h3>Technical Leadership</h3>
          <ul>
            <li>Technical Literacy for Executives</li>
            <li>Engineering Culture &amp; Process Improvement</li>
            <li>Hiring Pipeline Reviews</li>
            <li>Technical Screening</li>
            <li>Education and Mentorship</li>
          </ul>
        </SolutionSet>
      </SpecificSolutions>

    </Frame>
  )
}

// Set our prop-types when ready
PromotedContent.propTypes = {}

export default PromotedContent
