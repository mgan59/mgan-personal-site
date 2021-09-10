import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Need Some Molecules
import Button from '../atoms/Button'
import BodyText from '../atoms/BodyText'
import SectionHeader from '../atoms/SectionHeader'
import ServiceExampleActivites from '../molecules/ServiceExampleActivities'
import ServiceHeader from '../molecules/ServiceHeader'

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
    padding: 0 2em 4em 2em;
  }

  h3{
    font-family: ${props => props.theme.fonts.secondaryHeader};
    margin:0; 
    padding:0;
    font-size: 1.4em;
  }
`

const ServiceBlock = (props) => {
  return (
    <Frame>
      <SectionHeader>Services</SectionHeader>

      <h3>Fractional CTO</h3>
      <BodyText>As a Fractional CTO, I lead engineering and product teams to overcome organizational issues and implement highly effective systems.  I’ll also roll up my sleeves to get the job done.</BodyText>

      <h3>Technical Hiring Support</h3>
      <BodyText>Whether you're searching for your first engineering hire, trying to fix a problem within your organization, or seeking to rapidly grow your team, I provide technical screening and strategic hiring support to set your team up for success.</BodyText>

      <h3>Engineering Apprenticeships</h3>
      <BodyText>I'm passionate about helping young engineers develop their skills.  I offer a limited number of hands-on engineering apprenticeships to individuals and companies seeking to level up their talent through real-world experience and mentorship.</BodyText>

    </Frame>
  )
}

// Set our prop-types when ready
ServiceBlock.propTypes = {}

export default ServiceBlock
