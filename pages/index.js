import Head from 'next/head'

import styled from 'styled-components'

import MastHead from './components/core/organisms/MastHead'
import NavMenu from './components/core/molecules/NavMenu'

const TestHeader = styled.h1`
  color: #333;
  font-family: 'Lora', serif;
`

const OtherHeader = styled.h2`
font-family: 'Roboto Slab', serif;
`

// template -- setup the page, first contain should be a column
// This allow all subsequent `divs` in the page at the top to act as content blocks
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  // tint the BG for the page
  background-color: #FDFFFE;
`

// template -- Basic ContentFrame, default to margin: 0 auto -- so that the content and float
// and allow a background(pattern/color-fill) gets applied.
// Let the children style-components set the flex-direction
// don't set margin here, we want ContentFrame to be a generic container to configure the background
// consider setting flex-direction: column
const ContentFrame = styled.div`
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
`

export default function Home () {
  return (
    <div>
      <Head>
        <title>Morgan Craft</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Provided by g-font in recent embed tool, think this helps cdn cache the fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* Pair down the font-glyphs post design, don't need all weights */}
        <link href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;300;700display=swap' rel='stylesheet' />
      </Head>

      <PageContainer>
        <MastHead backgroundColor='#fff' selected='home' />

        <ContentFrame backgroundColor='#333'>
          <StandardBlock>
            <p>Place our content in here</p>
          </StandardBlock>
        </ContentFrame>

        <ContentFrame>
          <StandardBlock>
            <TestHeader>Hello!!</TestHeader>
            <OtherHeader>Kaboom!</OtherHeader>
          </StandardBlock>
        </ContentFrame>

      </PageContainer>

    </div>
  )
}
