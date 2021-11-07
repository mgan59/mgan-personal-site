import React from 'react'
import styled from 'styled-components'


// The DL/DT/DD service block
const ServiceTopic = styled.dt`
  font-size: ${props => props.theme.fontSize.bodyMobile};
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.body};
  font-weight: 700;
  

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size: ${props => props.theme.fontSize.bodyTablet};
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size: ${props => props.theme.fontSize.bodyDesktop};
  }
`;
const ServiceDefinition = styled.dd`
  margin-bottom: 1em;
  font-size: ${props => props.theme.fontSize.bodyMobile};
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.body};
  font-weight: 300;
  line-height: 1.6em;
  

  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media(min-width: 601px) {
    font-size: ${props => props.theme.fontSize.bodyTablet};
  }
  /* larger desktops */ }
  @media(min-width: 801px) {
    font-size: ${props => props.theme.fontSize.bodyDesktop};
  }
`;

const ServiceListing = (props)=>{
  return (
        <dl>
            <ServiceTopic>Delivery</ServiceTopic>
            <ServiceDefinition>Ensuring teams are shipping quality code on a regular cadence through one and two-week sprints.</ServiceDefinition>

            <ServiceTopic>Code Reviews</ServiceTopic>
            <ServiceDefinition>Establishing processes for reviewing code internally so your team can hold itself accountability.</ServiceDefinition>

            <ServiceTopic>Hiring</ServiceTopic>
            <ServiceDefinition>Implementing strategies and creating assessment solutions to ensure the developers you hire can do the technical work that's required.</ServiceDefinition>

            <ServiceTopic>Mentoring</ServiceTopic>
            <ServiceDefinition>Enabling engineers to write better stories and take ownership of their work.</ServiceDefinition>

            <ServiceTopic>Internal Systems</ServiceTopic>
            <ServiceDefinition>Setting up tools and teaching technical teams how to run effectively.</ServiceDefinition>
        </dl>
  )
}

export default ServiceListing