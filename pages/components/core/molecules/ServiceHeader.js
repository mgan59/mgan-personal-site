import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Load our components
import ContentDash from '../atoms/ContentDash'

const Header = styled.h3`
  font-family: 'Source Sans Pro', serif;
  font-size: 1.8em;
  margin: 0;
  padding:0 .6em 0 0;
`

const Frame = styled.div`
  display:flex;
  
  position: relative;
  div svg {
    position: relative;
    top: .5em;
  }
`
const ServiceByline = styled.span`
  display:flex;
  
  padding-left:.6em;
  font-size:1.4em;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  padding-top:.35em;
`

const ServiceHeader = (props) => {
  let byLine
  if (props.bylineAddition) {
    byLine = <ServiceByline>{props.bylineInfo} / &nbsp; <strong>{props.bylineAddition}</strong></ServiceByline>
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
