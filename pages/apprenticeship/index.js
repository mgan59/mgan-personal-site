import Head from 'next/head'
import { useRef, useState } from 'react'

import styled from 'styled-components'

import MastHead from '../components/core/organisms/MastHead'
import HeroBlockBasicText from '../components/core/organisms/HeroBlockBasicText'
import ApprenticeshipMultiText from '../components/core/organisms/ApprenticeshipMultiText'
import BasicTextBlock from '../components/core/organisms/BasicTextBlock'
import ApprenticeshipOrderedList from '../components/core/organisms/ApprenticeshipOrderedList'
import PackageOptions from '../components/apprenticeship/organisms/PackageOptions'
import ApplicationProcess from '../components/apprenticeship/organisms/ApplicationProcess'
import QuoteBlock from '../components/core/organisms/QuoteBlock'
import Footer from '../components/core/organisms/Footer'

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

const apprenticeshipWhatWeDoContent = {
  header: 'What We Do For You',
  text: [
    'Bootcamp Grads and Self-Taught developer\’s all face the same problem.  Getting their first engineering role.  The truth, employeers only want to hire senior developers or developers with at least 2-3 years experience working with a team.',
    'The biggest challenge for those breaking into this industry is a skill gap that comes from not knowing what you don\’t know.  And more importantly, how to build a developer portfolio that will attract hiring managers.  This apprenticeship program is focused on equiping you with real-world experience to close that, establish that portfolio and give the confidence/support to land your first job.'

  ]
}

const apprenticeshipFocusContent = {
  header: 'We We Focus On?',
  textIntro: [
    ''
  ],
  textKeywordDescriptions: [
    { keyword: 'Real Code Bases, Real Problems', description: 'Working with large code-cases and tackling multi-faceted development projects is critical to developing the engieering skills and confidence.' },
    { keyword: 'Developer Portfolio', description: 'A solid developer presence on github that showcases your dedication and journey as a developer is what will set you apart as a candidate.  We work together to build a solid portfolio foundation that can continue to grow throughout your career and put you on an accelerated path.' },
    { keyword: 'Agile Principles', description: 'Understanding how agile development works is crucial during interviews and being able to talk about your process backed by real-experience is what hiring managers want to hear and will leave a lasting impression' }
  ]
}

const apprenticeshipWhoForContent = {
  header: 'Is this program for me?',
  text: [
    'Our Apprenticeship is open to any post-bootcamp graduate or self-taught coder that has the basics of programming under their belt.  Currently, we are focused on Javascript/NodeJS and Python developers with the potentail to expend to more coding languages in the future. '
  ]
}

const apprenticeshipHowItWorksContent = {
  header: 'How Does It Works?',
  text: [
    'First Morgan reviews your application and portfolio to evaluate your skills and determine your personalized curriculum.',
    'Then, you are matched with project(s) from a list of <em>Open-Source and Commercial</em> partners.',
    'Simultaniously you will begin the onboarding process via <strong>gitBabel</strong> and you will work directly with Morgan and his teams to delivery weekly coding projects.',
    'Complete the specified amount of solo contribution hours for the project per/week.  As well as participate in weekly scheduled zoom/office-hours and other agile ceremonies for you to <strong>raise blockers!</strong>',
    'Over the weeks of paired-programming, office-hours and grooming, we will work together to build a developer portfolio that sets you apart and prepares you to <strong><em>get your first job!</em></strong>'

  ]
}
export default function Home () {
  const packageInfoRef = useRef(null)
  const applicationRef = useRef(null)
  // Declare a new state variable, which we'll call "count"
  const [contactReason, setContactReason] = useState('')

  const executePackageInfoScroll = () => packageInfoRef.current.scrollIntoView()
  const executeApplicationScroll = () => applicationRef.current.scrollIntoView()
  return (
    <PageFrame>
      <Head>
        <title>Morgan Craft</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Provided by g-font in recent embed tool, think this helps cdn cache the fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* Pair down the font-glyphs post design, don't need all weights */}
        <link href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;300;500;700&family=Source+Sans+Pro:wght@700&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap' rel='stylesheet' />

      </Head>

      <PageContainer>
        <MastHead backgroundColor='#fff' hideLogo selected='home' />

        <ContentRow backgroundColor='#232130'>
          <HeroBlockBasicText scrollToFunc={executePackageInfoScroll} />
        </ContentRow>

        <ContentRow>
          <BasicTextBlock {...apprenticeshipWhatWeDoContent} />
        </ContentRow>

        <ContentRow>
          <ApprenticeshipMultiText {...apprenticeshipFocusContent} />
        </ContentRow>

        <ContentRow>
          <BasicTextBlock {...apprenticeshipWhoForContent} />
        </ContentRow>

        <ContentRow>
          <ApprenticeshipOrderedList {...apprenticeshipHowItWorksContent} />
        </ContentRow>

        <ContentRow ref={packageInfoRef}>
          <PackageOptions header='Apprenticeship Options' />
        </ContentRow>

        <ContentRow>
          <ApplicationProcess />
        </ContentRow>

        <ContentRow backgroundColor='#50BEB8'>
          <Footer />
        </ContentRow>

      </PageContainer>

    </PageFrame>
  )
}
