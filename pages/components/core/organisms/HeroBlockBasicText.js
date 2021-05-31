import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Need Some Molecules
import HeroArrow from '../atoms/icons/HeroArrow'
import SocialIconBar from '../molecules/SocialIconBar'
import Button from '../atoms/Button'
// import NavMenu from '../molecules/NavMenu'

// need to figure out what we are doing in here... flex-direction is setable
// do we make this the width-block and we default the shape....
// might need some padding in here for mobile -- unless we move that to content-frame
// StandardBlock is a sizeable container and the margin is `auto` so it centers
const StandardBlock = styled.div`
  display:flex;
  width: 100%;
  //border:1px dotted #ffeeee;
  //background-color: #ccc;
  padding: 2em 1em;
  
  flex-direction:column;
  justify-content: center;
  align-items:center;
  
  order: 2;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    padding: 2em 1em;
    width: 65%;
    order: 1;
    
  }
  
`

// Styling the hero text atoms
const HeroOpeningGreeting = styled.div`
  font-family: ${props => props.theme.fonts.body};
  color: #ffffff;
  display:flex;
  position: relative;
  svg {
      position:absolute;
      top:1em;
  }
`

// maybe use background-url and media-query to set width/hiegh
const HeroMedia = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 638px;
  min-height: 150px;
  //width:30%;
  order: 1;
  padding-top: 2em;
  
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    
    min-height: auto;
    order: 2;
  }
`

const HeroFrame = styled.div`
  margin: 0 auto;
  display: flex;
  padding-bottom:2em;
  max-width:1100px;
  
  flex-direction: column;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    flex-direction: row;
    width: 100%;  
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    flex-direction: row;
    
  }
`

const MobileProfileImage = styled.img`
  display: block;
  width: 100%;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    display: none;  
  }
`
const LargeProfileImage = styled.img`
  display: none;
  width: 100%;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    display: block;  
  }
`

const HeroName = styled.h2`
  color: #50BEB8;
  font-family: ${props => props.theme.fonts.primaryHeader};
  font-weight: 700;
  font-size:4em;
  padding: 0 0 .1em 0;
  margin: 0;
  line-height:1em;
  
`

const HeroObjective = styled.p`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.primaryHeader};
  font-size:2.4em;
  width:80%;
  padding: 0;
  font-weight: 300;
  letter-spacing: .03em;
  margin: 0 0 .5em 0;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: .5em 0; 
  }
`

// Lato -- Light
const Text = styled.span`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2.6em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`

const HeroDefinitionList = styled.dl`
  margin: 0;
  padding: 0;
  width: 48%;
  
`
// Lora Medium Italics
const HeroTopic = styled.p`
  color: #8D8C92;
  font-family: ${props => props.theme.fonts.accent};
  font-weight: 500;
  font-style: italic;
  font-size:1.2em;
  
  letter-spacing:.04em;
  width:80%;
  

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.3em;
  }
  
`

const HeroTopicDefinition = styled.dd`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.primaryHeader};
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size:1.8em;
  text-align:center;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.8em;
  }
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 801px) {
    font-size:2.2em;
  }
`

const HeroDefinitionFrame = styled.div`
  display: flex;
  justify-content:center;

`

const IconFrame = styled.div`
  display: flex;
  margin: 2em auto;
`

const HeroBlock = (props) => {
  const handleClick = (event) => {
    props.scrollToFunc()
    return false
  }
  return (
    <HeroFrame>
      {/* HeroMedia comes first for mobile serves as page header */}
      {/* HeroMedia in responsive desktop will expand to second column */}
      <HeroMedia>
        <MobileProfileImage src='/morgan-hero-profile-mobile-screens.png' />
        <LargeProfileImage src='/morgan-hero-profile-large-screens.png' />
      </HeroMedia>
      <StandardBlock>

        <HeroObjective>Gain real world experience with my 12-week Engineering Apprenticeship</HeroObjective>
        <HeroTopic>"The only way to build software is together"</HeroTopic>
        <Button onClick={handleClick}>I want to enroll</Button>
      </StandardBlock>
    </HeroFrame>
  )
}

// Set our proptypes when ready
HeroBlock.propTypes = {}

export default HeroBlock
