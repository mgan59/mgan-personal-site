import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Need Some Molecules
import HeroArrow from '../atoms/icons/HeroArrow'
import SocialIconBar from '../molecules/SocialIconBar'
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
  content-justify: center;
  
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

const HeroName = styled.h1`
  color: #50BEB8;
  font-family: ${props => props.theme.fonts.primaryHeader};
  font-weight: 700;
  font-size:4em;
  padding: 0 0 .1em 0;
  margin: 0;
  line-height:1em;
`

const HeroObjective = styled.p`
  color: ${props => props.theme.colors.textInactive};
  font-family: ${props => props.theme.fonts.secondaryHeader};
  font-size:1.4em;
  padding: 0;
  font-weight: 400;
  margin: 0 0 .5em 0;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: .5em 0; 
  }
`

// Lato -- Light
const Text = styled.span`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.secondaryHeader};
  font-size: 2.6em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`

const HeroRole = styled.h2`
  color: #fff;
  font-family: ${props => props.theme.fonts.primaryHeader};
  font-weight: 500;
  font-size:2em;
  padding: 0 0 .1em 0;
  margin: 0;
  letter-spacing:.04em;
  line-height:1em;
`

const IconFrame = styled.div`
  display: flex;
  margin: 2em auto;
`

const HeroBlock = (props) => {
  return (
    <HeroFrame>
      {/* HeroMedia comes first for mobile serves as page header */}
      {/* HeroMedia in responsive desktop will expand to second column */}
      <HeroMedia>
        <MobileProfileImage src='/morgan-hero-profile-mobile-screens.png' />
        <LargeProfileImage src='/morgan-hero-profile-large-screens.png' />
      </HeroMedia>
      <StandardBlock>

        <HeroOpeningGreeting><Text>Hi, I'm</Text> <HeroArrow /></HeroOpeningGreeting>

        <HeroName>MORGAN CRAFT</HeroName>
        <HeroRole>Fractional CTO</HeroRole>
        <HeroObjective>Helping startups build high-performing technical teams and software users love</HeroObjective>

        <IconFrame>

          <SocialIconBar />
        </IconFrame>
      </StandardBlock>
    </HeroFrame>
  )
}

// Set our proptypes when ready
HeroBlock.propTypes = {}

export default HeroBlock
