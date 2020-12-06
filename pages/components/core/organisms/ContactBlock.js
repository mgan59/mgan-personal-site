import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../atoms/Button'
import ContentFrame from '../templates/ContentFrame'
import SectionHeader from '../atoms/SectionHeader'

const RadioDefinition = styled.dd`
  display: flex;
  position: relative;
  float:left;
  margin: 0 2em 0 0;
  padding:0;
`

const FieldLabel = styled.span`
  color: #626F90;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-style: italic;
  font-size:1.4em;
  text-align:center;
  letter-spacing: -0.2px;
`

const RadioTextLabel = styled.span`
  color: #000;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-style: italic;
  font-size:1.3em;
  text-align:center;
  letter-spacing: -0.2px;
  padding-left: .3em;
`

const RadioInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Label = styled.label`
  font-size:1.2em;
    display: flex;
    input:checked ~ span {
        background-color: #50BEB8;
        border-color: #358E88;
    }
`

const CustomRadioControl = styled.span`
  display: block;
  width: 1.3em;
  height: 1.3em;
  
  border: 3px solid #757575;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #fff;
  border-radius: 50%;
`

const RadioTopic = styled.dt`
  margin-bottom: .5em;
`

const InputSet = styled.dl`
  clear:both;
  display:block;
  margin-top:4em;
`

const InputTopic = styled.dt`
  margin-bottom: .2em;
`

const InputDefinition = styled.dd`
  display: block;
  margin: 0;
  padding: 0 0 2em 0;

  input[type=text], textarea {
      background-color: #FBFBFB;
      border-radius: 4px;
      border:1px solid #F3F3F3;
      padding:1em .5em;
      width: 80%;
      color: #989898;
  
      font-family: 'Lora', serif;
    font-weight: 500;
    font-style: italic;
    font-size:1.3em;
    -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
    letter-spacing: -0.2px;
    
    

  }

  input[type=text]:focus {
    border:1px solid #989898 !important;
    box-shadow: 0 0 3px #989898 !important;
    
  }
`
const ContactBlock = (props) => {
  const defaultNameField = 'Your name ...'
  const defaultEmailField = 'Your email ...'
  return (
    <ContentFrame>
      <SectionHeader>Get in touch</SectionHeader>
      <div>
        <form>
          <dl>
            <RadioTopic><FieldLabel>Reason for contact</FieldLabel></RadioTopic>

            <RadioDefinition>
              <Label>
                <RadioInput value='hireme' name='reasonContact' id='hireme' type='radio' />
                <CustomRadioControl />
              </Label>
              <RadioTextLabel>Hire me</RadioTextLabel>
            </RadioDefinition>
            <RadioDefinition>
              <Label>
                <RadioInput value='pairwithme' name='reasonContact' id='pairwithme' type='radio' />
                <CustomRadioControl />
              </Label>
              <RadioTextLabel>Pair with me</RadioTextLabel>
            </RadioDefinition>
            <RadioDefinition>
              <Label>
                <RadioInput value='talktome' name='reasonContact' id='talktome' type='radio' />
                <CustomRadioControl />
              </Label>
              <RadioTextLabel>Talk to me</RadioTextLabel>
            </RadioDefinition>
          </dl>

          <InputSet>
            <InputTopic><FieldLabel>Name</FieldLabel></InputTopic>
            <InputDefinition><input type='text' defaultValue={defaultNameField} /></InputDefinition>

            <InputTopic><FieldLabel>Email</FieldLabel></InputTopic>
            <InputDefinition><input type='text' defaultValue={defaultEmailField} /><br />Error invalid email shape</InputDefinition>

            <InputTopic><FieldLabel>Message</FieldLabel></InputTopic>
            <InputDefinition><textarea>Enter your message</textarea><br />Error invalid email shape</InputDefinition>
          </InputSet>

          <Button>Send Message</Button>
        </form>
      </div>
    </ContentFrame>

  )
}

ContactBlock.propTypes = {}

export default ContactBlock
