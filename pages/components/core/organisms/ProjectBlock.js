import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionHeader from '../atoms/SectionHeader'
import Badge from '../atoms/Badge'
import ContentFrame from '../templates/ContentFrame'
import GoodDocsIcon from '../atoms/icons/GoodDocs'
import SchoolHouseIcon from '../atoms/icons/SchoolHouse'

const InvolvementCopy = styled.p`
  font-size:1.9em;
  padding: 0;
  margin: 0;
  font-weight: bold;
`

/* need a flex container that is a row to show icon and text -- on mobile reduce text and stack */
const ProjectSet = styled.div`
  display: flex;
  margin: 2em 0 2em .5em;

`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 .5em;
`

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
  padding: 0;
`

const RoleLabel = styled.p`
font-family: Lora;
font-style: italic;
font-weight: 400;
font-size: 1.4em;
line-height: 55px;
letter-spacing: -0.19px;
padding: 0;
margin: 0;
color: #626F91;


`

const RoleDescription = styled.p`
  padding: 0;
  margin: 0;
  font-size:1.3em;
`

const ProjectBlock = (props) => {
  return (
    <ContentFrame>
      <SectionHeader>Current Active Projects</SectionHeader>
      <InvolvementCopy>These are a few projects I’m actively involved in as a contributor and advisor.</InvolvementCopy>
      <ProjectSet>
        <GoodDocsIcon />
        <ProjectDetails>
          <ProjectTitle>The Good Docs Project</ProjectTitle>
          <RoleLabel>PSC Member &amp; Mentor</RoleLabel>
          <RoleDescription>Part of the public-steering committee and mentor for the Google Season-of-Docs program.  I guide the organization on technical and governance issues.  Participate in code-reviews and empower other contributors.</RoleDescription>
          <Badge>Open-Source</Badge>
        </ProjectDetails>
      </ProjectSet>

      <ProjectSet>
        <SchoolHouseIcon />
        <ProjectDetails>
          <ProjectTitle>School House</ProjectTitle>
          <RoleLabel>Technical Product Advisor</RoleLabel>
          <RoleDescription>As a leading expert in the edtech and learning industry I was excited to join the team early on to build the future of learning.</RoleDescription>
          <Badge>Venture-Backed</Badge>
        </ProjectDetails>
      </ProjectSet>
    </ContentFrame>

  )
}

export default ProjectBlock
