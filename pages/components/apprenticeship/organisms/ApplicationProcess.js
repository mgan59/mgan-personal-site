import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../../core/atoms/Button'
import SectionHeader from '../../core/atoms/SectionHeader'

const Frame = styled.div`
  display: flex;
  margin: .5em auto;
  
  width: 100%;
  max-width:1100px;
  
  margin: 0 auto;
  flex-direction:column;
  padding: 0 1em 6em 1em;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: 2em auto;
    padding: 0 2em 4em 2em;
  }
`

const TextParagraph = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size:1.5em;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  
  a:first-child {
      margin-bottom: 1em;
  }

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    flex-direction: row;
    a:first-child {
        margin:0 1em 0 0;
    }
  }
`

const TightTextParagraph = styled(TextParagraph)`
  margin:0;
  padding:0;
  font-weight: ${props => props.fontWeight};
`

const ApplicationProcess = (props) => {
  const textParagraphs = []

  return (
    <Frame>
      <SectionHeader textAlign='center'>SOUNDS GREAT! How Can I Apply?</SectionHeader>
      <TightTextParagraph fontWeight='400'><strong>ENROLLMENT IS CURRENTLY OPEN</strong> -- <em>Limited Spots Available</em></TightTextParagraph>
      <TightTextParagraph fontWeight='400'>Summer Cohort Begins (August 16th)</TightTextParagraph>
      <TextParagraph>With only 2-3 spots left, you will want to complete an application to get started today! <br /><br />
      All applications are reviewed within 24-48 hours. Once reviewed there will be a follow-up to schedule a 30 minute interview to make sure you are a good fit.
      </TextParagraph>
      <ButtonBox>
        <Button extend href='https://morgan148.typeform.com/to/gPMmKFas' target='_blank'>Self-Taught Developer Application</Button>
        <Button extend href='https://morgan148.typeform.com/to/OZixxv1U' target='_blank'>Bootcamp Graduate Application</Button>
      </ButtonBox>
    </Frame>
  )
}

// Set our prop-types when ready
ApplicationProcess.propTypes = {}

export default ApplicationProcess
