import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionHeader from '../atoms/SectionHeader'

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
`

const ListItem = styled.li`
  font-family: ${props => props.theme.fonts.body};
  font-size:1.5em;
  padding:0 0 .5em .3em;
  font-weight: 300;
`

const ApprenticeshipOrderedList = (props) => {
  const listItems = []
  if (!props.text) {
    return null
  }
  props.text.forEach((textItem, i) => {
    listItems.push(<ListItem key={i} dangerouslySetInnerHTML={{ __html: textItem }} />)
  })
  return (
    <Frame>
      <SectionHeader textAlign='center'>{props.header}</SectionHeader>
      <ol>
        {listItems}
      </ol>
    </Frame>
  )
}

// Set our prop-types when ready
ApprenticeshipOrderedList.propTypes = {
  header: PropTypes.string,
  text: PropTypes.array

}

export default ApprenticeshipOrderedList
