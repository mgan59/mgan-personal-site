import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import Button from '../atoms/Button'
import ContentFrame from '../templates/ContentFrame'
import SectionHeader from '../atoms/SectionHeader'

/*
 * Several resources were used to build these custom radio styles
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio
 * And modern-css site
*/
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
  padding: 0 0 .4em .3em;
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
  margin-top:8em;
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
      padding:.8em .5em;
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

  textarea {
      resize: none;
  }

  input[type=text]:focus, textarea:focus {
    border:1px solid #989898 !important;
    box-shadow: 0 0 3px #989898 !important;
    
  }
`
const ContactBlock = (props) => {
  // console.log('contact block->', props)
  let hireMeChecked = ''
  const hireMeMessage = 'Tell me about your project -- team size, scope, and budget.'
  let pairMeChecked = ''
  const pairMeMessage = 'Tell me about your project and what specific tasks you wish to pair-up on.'
  let talkMeChecked = ''
  const talkMeMessage = 'Tell me about your challenges and what you want to talk about.'
  let messageHolder
  if (props.contactReason) {
    switch (props.contactReason) {
      case 'hire':
        hireMeChecked = 'checked'
        messageHolder = hireMeMessage
        break
      case 'pair':
        pairMeChecked = 'checked'
        messageHolder = pairMeMessage
        break
      case 'talk':
        talkMeChecked = 'checked'
        messageHolder = talkMeMessage
        break
      default:
        break
    }
  }
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
                <RadioInput onClick={(event) => { props.setContactReason('hire') }} value='hireme' defaultChecked={hireMeChecked} name='reasonContact' id='hireme' type='radio' />
                <CustomRadioControl />
              </Label>
              <RadioTextLabel>Hire me</RadioTextLabel>
            </RadioDefinition>
            <RadioDefinition onClick={(event) => { props.setContactReason('pair') }}>
              <Label>
                <RadioInput value='pairwithme' defaultChecked={pairMeChecked} name='reasonContact' id='pairwithme' type='radio' />
                <CustomRadioControl />
              </Label>
              <RadioTextLabel>Pair with me</RadioTextLabel>
            </RadioDefinition>
            <RadioDefinition onClick={(event) => { props.setContactReason('talk') }}>
              <Label>
                <RadioInput value='talktome' defaultChecked={talkMeChecked} name='reasonContact' id='talktome' type='radio' />
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
            <InputDefinition><textarea defaultValue='Enter your message' /><br /> {messageHolder} </InputDefinition>
          </InputSet>

          <Button>Send Message</Button>
        </form>
      </div>
    </ContentFrame>

  )
}

ContactBlock.propTypes = {}

export default ContactBlock
