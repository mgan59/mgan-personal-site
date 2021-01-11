import React from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import GithubIcon from './icons/SocialGithub'

const BadgeFrame = styled.div`
  display:flex;
  width: 10em;
  border-radius: 8px;
  background-color:  ${({ theme }) => theme.colors.primaryBrand};
  padding: .5em 1em;
  min-width: 10ch;
  div {
    padding-right: .2em;
  }
  span {
    font-family: 'Roboto Slab';
      color: #25716D;
  }
`

const Badge = (props) => {
  // add icon support here for github...
  let hasIcon = ''
  switch (props.icon) {
    case 'github':
      hasIcon = <GithubIcon strokeColor={props.theme.colors.primaryBrandD2} />
      break
  }
  return (
    <BadgeFrame>
      {hasIcon}
      <span>{props.children}</span>
    </BadgeFrame>
  )
}

// Set our prop-types when ready
Badge.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default withTheme(Badge)
