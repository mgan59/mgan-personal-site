import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* Our basic inner frame that we use to create a centered flex-column for layouts */
/*
   TODO/NOTE: Need the ability to control some of the padding/margin here
   depending on what the content is.  Margin 0 auto is fine, but controlling the padding
   would be helpful

   ==Example Cases==
   - QuoteBlock
*/
const ContentFrame = styled.div`
  display: flex;
  margin: 2em auto;  
  width: 100%;
  max-width:1100px;
  margin: 0 auto;
  flex-direction:column;
  padding: 0 2em 1em 2em;
`

export default ContentFrame
