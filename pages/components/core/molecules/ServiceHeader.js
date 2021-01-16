import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Load our components
import ContentDash from '../atoms/ContentDash'

const Header = styled.h3`
  font-family: ${props => props.theme.fonts.secondaryHeader};
  font-size: 1.3em;
  margin: 0;
  padding:0 .6em 0 0;
  
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.8em;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`

const Frame = styled.div`
  display:flex;
  
  position: relative;
  
  /* can control he position of content-dash here with media queries */
  div svg{
    position: relative;
    top: .2em;
    /* tablet, landscape iPad, lo-res laptops ands desktops */ 
    @media(min-width: 601px) {
      top: .5em;
    }
  }
`
const ServiceByline = styled.div`
  display:flex;
  
  padding-left:.6em;
  font-size:.9em;
  font-family: ${props => props.theme.fonts.accent};
  font-weight: 400;
  padding-top:.40em;
  flex-direction: column;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.4em;
    flex-direction: row;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`

const ServiceByLineMulti = styled(ServiceByline)`
  padding-top: 0;
`

const ServiceHeader = (props) => {
  let byLine
  if (props.bylineAddition) {
    byLine = <ServiceByLineMulti><span>{props.bylineInfo} </span><span>{props.bylineAddition}</span></ServiceByLineMulti>
  } else {
    byLine = <ServiceByline>{props.bylineInfo}</ServiceByline>
  }
  return (
    <Frame>

      {/* TODO: design updates, hide contentDash on mobile and for service byline, breakup so we can get BYOP to appear under the text itself */}
      <Header>{props.header}</Header>
      <ContentDash />
      {byLine}

    </Frame>
  )
}

// Set our proptypes when ready
ServiceHeader.propTypes = {
  header: PropTypes.string.isRequired,
  bylineInfo: PropTypes.string.isRequired,
  bylineAddition: PropTypes.string
}

export default ServiceHeader
