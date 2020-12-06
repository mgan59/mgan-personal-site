import React from 'react'
import styled from 'styled-components'

// Lora Bold Italic
const Button = styled.a`
  font-family: 'Lora', serif;
  font-size: 1.3em;
  letter-spacing: .3px;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  text-align: center;
  color: #889A94;
  background: #F8FFFF;
  box-shadow: 0px 4px 1px #E1EEE8;
  border-radius: 4px;
  width: 10em;
  max-height: 60px;
  padding: .6em .3em .6em .3em;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #000;
    box-shadow: 0px 4px 1px #50BEB8;
  }
`

export default Button
