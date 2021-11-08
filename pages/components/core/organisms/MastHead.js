import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Need Some Molecules
import LogoText from '../atoms/LogoText'
import LogoAbbrSymbol from '../atoms/LogoAbbrSymbol'
import NavMenu from '../molecules/NavMenu'

// Shaping a global header now in here for us to attach into other pages....
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  position:relative;
  background: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
  padding-bottom:.55em;
`

const LogoPlacementColumn = styled.div`
  display: ${props => props.hideLogo ? 'none' : 'flex'};
  flex-direction: column;
  width: 300px;
  padding:1em 0 0 2em;

  /* Help to render link cleanly in Storybook */
  a{text-decoration:none;}
  a:visited {
    text-decoration: none;
  }
`

// enable an placement flex container
const NavMenuPlacement = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`

const Component = (props) => {
  return (
    <TopBar backgroundColor={props.backgroundColor}>
      {/* Current hiding logo so our Nav in mobile can expand, eventually move to hamburger */}
      <LogoPlacementColumn hideLogo={props.hideLogo}>
        {props.showAbbr? <LogoAbbrSymbol/> : null}
        {props.showLogoText? <LogoText>Morgan Craft</LogoText> : null}
      </LogoPlacementColumn>

      <NavMenuPlacement>
        {<NavMenu selected={props.selected} />}
      </NavMenuPlacement>
    </TopBar>
  )
}

Component.propTypes = {
  backgroundColor: PropTypes.string,
  selected: PropTypes.string
}

export default Component
