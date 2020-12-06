import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* Our basic inner frame that we use to create a centered flex-column for layouts */
const ContentFrame = styled.div`
  display: flex;
  margin: 2em auto;  
  width: 100%;
  max-width:1100px;
  margin: 0 auto;
  flex-direction:column;
  padding: 0 2em 4em 2em;
`

export default ContentFrame
