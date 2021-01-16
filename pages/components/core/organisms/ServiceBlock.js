import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Need Some Molecules
import Button from '../atoms/Button'
import SectionHeader from '../atoms/SectionHeader'
import ServiceExampleActivites from '../molecules/ServiceExampleActivities'
import ServiceHeader from '../molecules/ServiceHeader'

// import NavMenu from '../molecules/NavMenu'

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

// Lato
// font weight 300 -- light
// font weight 400 -- regular
const ServiceCopy = styled.p`
  font-size: 1.1em;
  color: #0c0524;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 300;
  padding: .6em .1em;
  line-height: 1.5em;
  margin: 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size:1.4em;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`

const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4em 0;

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    margin: 0 0 5em 0;
  }
  /* larger desktops */ }
  @media(min-width: 801px) {}
`

const ServiceBlock = (props) => {
  const handleClick = (event, reason) => {
    props.setContactReason(reason)
    props.scrollToFunc()
  }

  return (
    <Frame>
      <SectionHeader>What can I do for you?</SectionHeader>
      <ServiceSection>
        <ServiceHeader header='Pair with me' bylineInfo='1hr of pairing / BYOP ' bylineAddition='[Bring Your Own Project]' />
        <ServiceCopy>yes, it’s easy for you to just hand off your project and I do it for you... however, if you want to become bad ass, lets do it together and learn from my expertise. </ServiceCopy>
        <ServiceExampleActivites />
        <Button onClick={(event) => { handleClick(event, 'pair') }}>Yes, Let's Pair</Button>
      </ServiceSection>

      <ServiceSection>
        <ServiceHeader header='Hire me' bylineInfo={'I\'ll ship it!'} />
        <ServiceCopy>I can do it all.  Full-stack development, infrastructure, and UX/UI design are just the highlights of my shipping skills.  I’ve also managed large global teams of product engineers and small teams of sales representatives.
            Helped raise capital and sold a company.  <strong>You want a shipper and not a talker.</strong>
        </ServiceCopy>
        <Button onClick={(event) => { handleClick(event, 'hire') }}>Ship it!</Button>
      </ServiceSection>

      <ServiceSection>
        <ServiceHeader header='Talk to me' bylineInfo='30 mins of AMA' />
        <ServiceCopy>Been there, done that.  Truthful and actionable advice.  No bullshit, just the nitty-gritty of it all.
            Great for career and management advice, product strategy and g2m (go to market) strategy.  <em>Willing to spend 30 minutes prior to call reviewing material.</em>
        </ServiceCopy>
        <Button onClick={(event) => { handleClick(event, 'talk') }}>Ready to chat!</Button>
      </ServiceSection>

    </Frame>
  )
}

// Set our prop-types when ready
ServiceBlock.propTypes = {}

export default ServiceBlock
