import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Need Some Molecules
// import Button from '../atoms/Button'

const Frame = styled.div`
  display: flex;
  margin: .5em auto;
  
  width: 100%;
  
  
  
  flex-direction:column;
  
  ul {
     columns: 2;
  }

  ul li {
  
      font-size: 1.4em;
  color: #000;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  
  line-height: 1.3em;
  margin: 0;
  }
`

// Lato
// font weight 100 -- light
// font weight 400 -- regular
const ServiceCopy = styled.p`
  font-size: 1.4em;
  color: #000;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  padding: .4em 0;
  line-height: 1.3em;
  margin: 0;
`

// Lora Regular Italic
const ServiceExampleLabel = styled.span`
  font-family: 'Lora', serif;
  color: #626F90;
  font-weight: 500;
  font-style: italic;
  font-size: 1.3em;
`

const ActivityController = styled.div`
  display: flex;
  

`

const ToggleItem = styled.span`
font-family: 'Lora', serif;
margin: 0 .4em;
font-size: 1.3em;
letter-spacing: .3px;
font-weight: 700;
font-style: italic;
text-decoration: none;
color: ${props => props.selected ? '#000' : '#889A94'};

border-bottom: ${props => props.selected ? '3px solid #50BEB8' : '3px dotted #E4F1EB'};
cursor: pointer;
:hover {
  color: #000;
  border-bottom: 3px solid #50BEB8;
}
`

const ServiceExampleActivities = (props) => {
  // Add React Hooks / State to control the selection and which content block is loading
  // finish wiring
  const toggleClick = () => {
    console.log('me clickie')
  }

  return (
    <Frame>

      <ActivityController>
        <ServiceExampleLabel>Example Pairing Activities:</ServiceExampleLabel>
        <ToggleItem selected onClick={toggleClick}>Design</ToggleItem>

        <ToggleItem onClick={toggleClick}>Development</ToggleItem>
      </ActivityController>

      <ul>
        <li>Design System</li>
        <li>Figma Workflow &amp; Process</li>
        <li>Portfolio Review</li>
        <li>UX Workshop</li>
        <li>Product Development</li>
        <li>Roadmap &amp; Priority Planning</li>
      </ul>

    </Frame>
  )
}

// Set our proptypes when ready
ServiceExampleActivities.propTypes = {}

export default ServiceExampleActivities
