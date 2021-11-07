import Head from 'next/head'
import { useRef, useState } from 'react'

import styled from 'styled-components'

// We build/bundle up our GoogleFonts from our ThemeConstant
import { GOOGLE_FONT_TYPE_LOADER } from '../../themeConstants'

import MastHead from '../components/core/organisms/MastHead'
import HeroBlockBasicText from '../components/core/organisms/HeroBlockBasicText'
import ApprenticeshipMultiText from '../components/core/organisms/ApprenticeshipMultiText'
import BasicTextBlock from '../components/core/organisms/BasicTextBlock'
import ApprenticeshipOrderedList from '../components/core/organisms/ApprenticeshipOrderedList'
import PackageOptions from '../components/apprenticeship/organisms/PackageOptions'
import ApplicationProcess from '../components/apprenticeship/organisms/ApplicationProcess'
import QuoteBlock from '../components/core/organisms/QuoteBlock'
import Footer from '../components/core/organisms/Footer'
import BodyText from '../components/core/atoms/BodyText'
import AttentionText from '../components/core/atoms/AttentionText'
import Button from '../components/core/atoms/Button'

import ServiceListing from '../components/core/molecules/ServiceListing'

const PageFrame = styled.div`
  min-height: 100vh;
`

// template -- setup the page, first contain should be a column
// This allow all subsequent `divs` in the page at the top to act as content blocks
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  // tint the BG for the page
  background-color: #FDFFFE;
`

// template -- Basic ContentRow, default to margin: 0 auto -- so that the content and float
// and allow a background(pattern/color-fill) gets applied.
// Let the children style-components set the flex-direction
// don't set margin here, we want ContentRow to be a generic container to configure the background
// consider setting flex-direction: column
const ContentRow = styled.div`
  display: flex;
  background: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
  flex-direction: column;
`

const Frame = styled.div`
  display: flex;
  margin: .5em auto;
  
  width: 100%;
  max-width:1100px;
  
  margin: 0 auto;
  flex-direction:column;
  padding: 0 1em 1em 1em; 
`


export default function About () {
  
  return (
    <PageFrame>
      <Head>
        <title>Morgan Craft</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Provided by g-font in recent embed tool, think this helps cdn cache the fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* Pair down the font-glyphs post design, don't need all weights */}
        <link href={`https://fonts.googleapis.com/css2?${GOOGLE_FONT_TYPE_LOADER}&display=swap`} rel='stylesheet' />

      </Head>

      <PageContainer>
        {/* hiding logo placement, till we add a mobile hamburger menu */}
        <MastHead backgroundColor='#fff' hideLogo selected='about' />
        

        <ContentRow >
          <Frame>
            <h1>About Morgan Craft</h1>
            <BodyText>Through more than a decade of experience in technical leadership roles, I've developed an obsession with learning.  I've mentored engineers, led teams of developers, and helped CEOs understand what's going on with the technical side of their business. My experience has taught me that the key to making great products is to create teams with a built-in culture of learning.</BodyText>
            <BodyText>In 2020 I founded gitBabel, the first developer platform designed to scale engineering teams through continuous learning and team collaboration. Gitbabel enables companies to document their work and create an enriching environment for developers to gain knowledge and grow their abilities. </BodyText>
            <BodyText>Prior to founding gitBabel I was the CTO and Interim CEO for Hickory Training, an adaptive learning platform used by companies like Shopify, Stripe, and Mailchimp to train customer service and sales teams. During my time at Hickory, I led a team of engineers, data-scientist, and learning experts.  We rebuilt the product from the ground up, and helped to create a culture of learning, mentoring, and inclusive collaboration. </BodyText>
          </Frame>
          
        </ContentRow>

        <ContentRow >
          <Frame>
            <h2>What I Do</h2>
            <BodyText>For many CEOs, the ability to effectively leverage technology is a make-or-break challenge.</BodyText>
            <BodyText>I share insight with non-technical leaders to help them make smarter business decisions, and I teach them to recognize whether or not their team is moving in the right direction. With every team I work with, I strive to implement learning systems and establish processes to build strong, scalable organizations. </BodyText>
            <BodyText>From guiding teams of engineers to giving founders the tools they need to create a culture of accountability, my goal is to set up every company I work with for long-term success.</BodyText>
            <AttentionText>I help companies with....</AttentionText>
            <ServiceListing />

            {/* <Button href='/contact'>Contact Me!</Button> */}
          </Frame>
          
        </ContentRow>

        <ContentRow backgroundColor='#50BEB8'>
          <Footer />
        </ContentRow>

      </PageContainer>
    </PageFrame>
  )
}
