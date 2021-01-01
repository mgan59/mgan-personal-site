import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CreativeCommonsIcon from '../atoms/icons/CreativeCommons'
import ContentFrame from '../templates/ContentFrame'

const BrandingText = styled.p`
color: #3B4B4A;
font-family: 'Roboto Slab', serif;
font-weight: 500;
margin: 0;
padding: 0;
font-size:2.2em;
text-align:left;
`

const Text = styled.p`
color: #3B4B4A;
font-family: 'Roboto Slab', serif;
font-weight: 500;
margin: 0;
padding: 0;
font-size:1.2em;
text-align:left;
`

const Row = styled.div`
  display: flex;
  position:relative;
  padding-top:1em;
  div {
      margin:0 0 0 1em;
  }
`

const Footer = (props) => {
  return (
    <ContentFrame>
      <Row>
        <BrandingText>Morgan Craft  </BrandingText>

      </Row>

      <Row>
        <Text>This site is made available on github via </Text>
        <CreativeCommonsIcon />
      </Row>

    </ContentFrame>

  )
}

Footer.propTypes = {}

export default Footer
