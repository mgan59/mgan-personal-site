import { useRef, useState } from 'react'
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
     list-style-type: none;
     margin:0;
     padding: .5em;
  }

  /* setting dashed list -- https://stackoverflow.com/questions/3200249/html-list-style-type-dash */
  ul li {
  
    font-size: 1.3em;
    color: #0C0524;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    text-indent: -5px;
    line-height: 1.3em;
    margin: 0;
    padding: 0 0 .2em 0;

    /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media(min-width: 601px) {
      font-size:1.4em;
    }
  
  }

  ul li:before {
    content: "- ";
    text-indent: -5px;
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
  font-size: 1.2em;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.5em;
  }
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
  // Declare a new state variable, which we'll call "count"
  const [activityType, setActivityType] = useState('design')
  const toggleClick = (event, actionType) => {
    setActivityType(actionType)
  }
  let activityDesignSelected = ''
  let activityDevelopmentSelected = ''
  let activitySet = ''
  if (activityType === 'design') {
    activityDesignSelected = 'selected'
    activitySet = (
      <ul>
        <li>Design System</li>
        <li>Figma Workflow &amp; Process</li>
        <li>Portfolio Review</li>
        <li>UX Workshop</li>
        <li>Product Development</li>
        <li>Roadmap &amp; Priority Planning</li>
      </ul>
    )
  } else {
    activityDevelopmentSelected = 'selected'
    activitySet = (
      <ul>
        <li>Code Review(s)</li>
        <li>Architecture Review</li>
        <li>Pair Programming</li>
        <li>Groomer's Workshop</li>
        <li>Story Estimates</li>
        <li>Bootcamp Tutor</li>
      </ul>
    )
  }
  return (
    <Frame>

      <ActivityController>
        <ServiceExampleLabel>Activities:</ServiceExampleLabel>
        <ToggleItem selected={activityDesignSelected} onClick={(event) => { toggleClick(event, 'design') }}>Design</ToggleItem>
        <ToggleItem selected={activityDevelopmentSelected} onClick={(event) => { toggleClick(event, 'development') }}>Development</ToggleItem>
      </ActivityController>

      {activitySet}

    </Frame>
  )
}

// Set our proptypes when ready
ServiceExampleActivities.propTypes = {

}

export default ServiceExampleActivities
