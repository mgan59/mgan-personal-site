import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
 * Notes to add to storybook:
 * - When you need to block a color, such as fillHover for Medium icon use 'transparent'
 * - Currently default to the dark theme, but as we expand icon usage we can leverage a theme
 *
 */
const AnimatedSvgIcon = styled.div`
  svg path {
    fill: ${props => props.fillColor ? props.fillColor : '#232130'};
    stroke: ${props => props.strokeColor ? props.strokeColor : '#6B6B6B'};
    transition: 300ms all ease-in-out;
  }
  svg rect {
    fill: ${props => props.fillColor ? props.fillColor : '#232130'};
    stroke: ${props => props.strokeColor ? props.strokeColor : '#6B6B6B'};
    transition: 300ms all ease-in-out;
  }  
  :hover {
    svg path{
      fill: ${props => props.fillHoverColor ? props.fillHoverColor : '#fff'};
      stroke: ${props => props.strokeHoverColor ? props.strokeHoverColor : '#fff'};
    }
    svg rect {
      fill: ${props => props.fillHoverColor ? props.fillHoverColor : '#fff'};
      stroke: ${props => props.strokeHoverColor ? props.strokeHoverColor : '#fff'};
    }
  }
`

AnimatedSvgIcon.propTypes = {
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  fillHoverColor: PropTypes.string,
  strokeHoverColor: PropTypes.string
}
export default AnimatedSvgIcon
