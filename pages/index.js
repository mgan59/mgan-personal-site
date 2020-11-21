import Head from 'next/head'

import styled from 'styled-components'

const TestHeader = styled.h1`
  color: #333;
  font-family: 'Lora', serif;
`

const OtherHeader = styled.h2`
font-family: 'Roboto Slab', serif;
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

      <main>
        <TestHeader>Hello!!</TestHeader>
        <OtherHeader>Kaboom!</OtherHeader>
      </main>
    </div>
  )
}
