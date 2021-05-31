import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionHeader from '../../core/atoms/SectionHeader'

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

const OfferingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  position:relative;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    width: 48%;
    margin: 0;
  }
`

const OfferingPanel = styled.div`
display: flex;
  
  
  width: 100%;
  max-width:1100px;
  
  
  flex-direction:column;
  

  div:first-child {
    margin-right:2em;
  }

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    flex-direction: row;
  }
`

const OfferingFrame = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
  border:1px solid #D7D7D7;
  border-radius: 16px;
  top:-1em;
  position:relative;
  z-index: 2;
  padding-bottom: 2em;
`

const OfferingPackageLabel = styled.h3`
font-family: ${props => props.theme.fonts.body};
  background-color:  ${props => props.theme.colors.primaryBrand};
  color: #fff;
  border-radius: 16px;
  width: 200px;
  margin: 0 auto;
  text-align:center;
  padding:1.2em 0;
  z-index: 10;
  font-weight: 800;
  span {
    font-style: italic;
    font-weight: 400;
    color: #efefef;
    font-family: ${props => props.theme.fonts.accent};
  }
  
  
`

const OfferingPricingInfo = styled.div`
  display: flex;
  width: 100%;
  background-color:  #DCF0EA;
  color: #198C86;
  padding: .8em 0;
  margin-top: 3em;
  justify-content: center;
  p {
    font-style: italic;
    font-size: 1.4em;
    margin:0;
    padding: 0;
    font-family: ${props => props.theme.fonts.body};
  }
`

const OfferingSectionHeader = styled.h4`
  font-family: ${props => props.theme.fonts.accent};
  font-style: italic;
  font-weight: 500;
  color: #c7c7c7;
  line-height: 45px;
  font-size:1.2em;
  letter-spacing: -0.253333px;
  margin: 0;
  padding: 0;
`

const OfferingSectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 5% 0 5%;

  dl {margin:0; padding:0}
  dt {
    font-family: ${props => props.theme.fonts.body};
    margin:.6em 0 0 0; padding:0; font-size:1.2em;
    span {
      margin-left: .4em;
    }
  
  }
  dt:first-child{
    margin-top:0;
  }
`

const OfferingSectionDefintion = styled.dd`
  font-family: ${props => props.theme.fonts.body};
  margin:0 0 0 1.3em; 
  padding:0; 
  color: #c7c7c7;
  font-weight: 400;
  span {
    font-style:italic;
  }
`

const OfferingSectionDefintionEmphasis = styled(OfferingSectionDefintion)`
  color: ${props => props.theme.colors.primaryBrand};
  
`

const CommitmentStatement = styled.div`
  margin:0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CommitmentHours = styled.p`
font-family: ${props => props.theme.fonts.body};
    color: #198C86;
    font-weight: 800;
    font-size: 3.2em;
    margin:.3em auto 0 auto;
    padding:0;
    width:90%;
`

const CommitmentLabel = styled.p`
font-family: ${props => props.theme.fonts.body};
    color: #585858;
    font-weight: 400;
    font-size: 1.5em;
    margin:-.4em auto 0 auto;
    padding:0;
    width:90%;
`

const PackageOptions = (props) => {
  /*
    const textParagraphs = []
  props.text.forEach((textItem, i) => {
    textParagraphs.push(<TextParagraph key={i}>{textItem}</TextParagraph>)
  }) */
  return (
    <Frame>
      <SectionHeader textAlign='center'>{props.header}</SectionHeader>
      <OfferingPanel>
        <OfferingContainer>
          <OfferingPackageLabel>6-Month <span>Standard</span></OfferingPackageLabel>
          <OfferingFrame>
            <OfferingPricingInfo><p>$250 Monthy / $1300 UpFront</p></OfferingPricingInfo>
            <CommitmentStatement>
              <CommitmentHours>10/hrs</CommitmentHours>
              <CommitmentLabel>a week commitment</CommitmentLabel>
            </CommitmentStatement>
            <OfferingSectionBlock>
              <OfferingSectionHeader>Weekly Commitments</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>Solo Contribution / Development</span></dt>
                <OfferingSectionDefintion>5hrs</OfferingSectionDefintion>
                <dt>&bull; <span>Individual Pair-Programming</span></dt>
                <OfferingSectionDefintion>2hrs Scheduled</OfferingSectionDefintion>
                <dt>&bull; <span>Group Office Hours</span></dt>
                <OfferingSectionDefintion>2 Participant Sessions</OfferingSectionDefintion>
                <dt>&bull; <span>Code Reviews</span></dt>
                <OfferingSectionDefintion>3 max</OfferingSectionDefintion>
                <dt>&bull; <span>Small Group Standup</span></dt>
                <OfferingSectionDefintion><span>Once Weekly</span></OfferingSectionDefintion>
                <dt>&bull; <span>Weekly Grooming Session</span></dt>
                <OfferingSectionDefintion>1hr - <span>project planning, architecture, estimating</span></OfferingSectionDefintion>
                <dt>&bull; <span>Classroom / Learning Sessions</span></dt>
                <OfferingSectionDefintion><span>Bi-Weekly</span></OfferingSectionDefintion>
              </dl>
            </OfferingSectionBlock>
            <OfferingSectionBlock>
              <OfferingSectionHeader>On-going Calls & Assessments</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>Initial Skills Report</span></dt>
                <dt>&bull; <span>Monthly Progress Reports</span></dt>
                <dt>&bull; <span>Portfolio Review & Strategy</span></dt>
                <OfferingSectionDefintion>3 Sessions</OfferingSectionDefintion>
              </dl>
            </OfferingSectionBlock>
            <OfferingSectionBlock>
              <OfferingSectionHeader>Post Apprenticeship</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>1:1 / Coaching Calls</span></dt>
                <OfferingSectionDefintion>30min / 2 Sessions</OfferingSectionDefintion>
                <dt>&bull; <span>gitBabel Community Premium</span></dt>
                <OfferingSectionDefintion>2 years</OfferingSectionDefintion>
                <dt>&bull; <span>Circle Group / Membership</span></dt>
                <dt>&bull; <span>Access to my personal network</span></dt>
                <OfferingSectionDefintion>Hiring Managers & CTOs</OfferingSectionDefintion>
              </dl>
            </OfferingSectionBlock>
          </OfferingFrame>
        </OfferingContainer>
        <OfferingContainer>
          <OfferingPackageLabel>3-Month <span><u>Intensive</u></span></OfferingPackageLabel>
          <OfferingFrame>
            <OfferingPricingInfo><p>$650 Monthy / $1700 UpFront</p></OfferingPricingInfo>
            <CommitmentStatement>
              <CommitmentHours>30/hrs</CommitmentHours>
              <CommitmentLabel>a week commitment</CommitmentLabel>
            </CommitmentStatement>
            <OfferingSectionBlock>
              <OfferingSectionHeader>Weekly Commitments</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>Solo Contribution / Development</span></dt>
                <OfferingSectionDefintionEmphasis>15hrs</OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Individual Pair-Programming</span></dt>
                <OfferingSectionDefintionEmphasis>4hrs Flexible Scheduling  / <span>Unlimited Observation</span></OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Group Office Hours</span></dt>
                <OfferingSectionDefintionEmphasis>4 Participant Sessions / <span>Unlimited Observation</span></OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Code Reviews</span></dt>
                <OfferingSectionDefintionEmphasis>Unlimited</OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Small Group Standup</span></dt>
                <OfferingSectionDefintionEmphasis><span>Daily</span></OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Weekly Grooming Session</span></dt>
                <OfferingSectionDefintionEmphasis>2hr - <span>project planning, architecture, estimating</span></OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>Classroom / Learning Sessions</span></dt>
                <OfferingSectionDefintionEmphasis><span>Weekly</span></OfferingSectionDefintionEmphasis>
              </dl>
            </OfferingSectionBlock>
            <OfferingSectionBlock>
              <OfferingSectionHeader>On-going Calls & Assessments</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>Initial Skills Report</span></dt>
                <dt>&bull; <span>Monthly Progress Reports</span></dt>
                <dt>&bull; <span>Portfolio Review & Strategy</span></dt>
                <OfferingSectionDefintionEmphasis>Unlimited</OfferingSectionDefintionEmphasis>

              </dl>
            </OfferingSectionBlock>
            <OfferingSectionBlock>
              <OfferingSectionHeader>Post Apprenticeship</OfferingSectionHeader>
              <dl>
                <dt>&bull; <span>1:1 / Coaching Calls</span></dt>
                <OfferingSectionDefintionEmphasis>30min / 6 Sessions</OfferingSectionDefintionEmphasis>
                <dt>&bull; <span>gitBabel Community Premium</span></dt>
                <OfferingSectionDefintion>2 years</OfferingSectionDefintion>
                <dt>&bull; <span>Circle Group / Membership</span></dt>
                <dt>&bull; <span>Access to my personal network</span></dt>
                <OfferingSectionDefintion>Hiring Managers & CTOs</OfferingSectionDefintion>
              </dl>
            </OfferingSectionBlock>
          </OfferingFrame>
        </OfferingContainer>
      </OfferingPanel>
    </Frame>
  )
}

// Set our prop-types when ready
PackageOptions.propTypes = {
  header: PropTypes.string,
  text: PropTypes.array

}

export default PackageOptions
