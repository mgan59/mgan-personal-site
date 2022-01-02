import Head from 'next/head'
import { useRef, useState } from 'react'

import styled from 'styled-components'

// We build/bundle up our GoogleFonts from our ThemeConstant
import { GOOGLE_FONT_TYPE_LOADER } from '../themeConstants'

import MastHead from './components/core/organisms/MastHead'
import HeroBlock from './components/core/organisms/HeroBlock'
import ServiceBlock from './components/core/organisms/ServiceBlock'
import SolvingChallengesBlock from './components/core/organisms/SolvingChallengesBlock'
import QuoteBlock from './components/core/organisms/QuoteBlock'
// import ProjectBlock from './components/core/organisms/ProjectBlock'
import AboutSummaryBlock from './components/core/organisms/AboutSummaryBlock'
import Footer from './components/core/organisms/Footer'
import ContactBlock from './components/core/organisms/ContactBlock'

import AttentionText from './components/core/atoms/AttentionText'

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
`

// need to figure out what we are doing in here... flex-direction is setable
// do we make this the width-block and we default the shape....
// might need some padding in here for mobile -- unless we move that to content-frame
// StandardBlock is a sizeable container and the margin is `auto` so it centers
const StandardBlock = styled.div`
  display:flex;
  width: 42em;
  border:1px dotted #ffeeee;
  margin: 0 auto;
  flex-direction:column;
`

export default function Home () {
  const myRef = useRef(null)
  // Declare a new state variable, which we'll call "count"
  const [contactReason, setContactReason] = useState('')

  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <PageFrame>
      <Head>
        <title>Morgan Craft</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Provided by g-font in recent embed tool, think this helps cdn cache the fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* Pair down the font-glyphs post design, don't need all weights */}
        <link href={`https://fonts.googleapis.com/css2?${GOOGLE_FONT_TYPE_LOADER}&display=swap`} rel='stylesheet' />
        <meta name='ahrefs-site-verification' content='a0053672f7d85309642950729041cc1d9f8d797ce1f190fd9110f17b98073251' />
      </Head>

      <PageContainer>
        <MastHead backgroundColor='#fff' hideLogo selected='home' />

        <ContentRow backgroundColor='#232130'>
          <HeroBlock />
        </ContentRow>

        <ContentRow>
          <SolvingChallengesBlock />
        </ContentRow>

        <ContentRow>
          <ServiceBlock scrollToFunc={executeScroll} setContactReason={setContactReason} />
        </ContentRow>

        <ContentRow>
          <AboutSummaryBlock />
        </ContentRow>

        <ContentRow backgroundColor='#ccc'>
          <QuoteBlock />
        </ContentRow>

        <ContentRow ref={myRef}>
          <ContactBlock contactReason={contactReason} setContactReason={setContactReason} />
        </ContentRow>

        <ContentRow backgroundColor='#50BEB8'>
          <Footer />
        </ContentRow>

      </PageContainer>

    </PageFrame>
  )
}
