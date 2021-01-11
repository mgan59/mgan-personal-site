import styled from 'styled-components'
// import PropTypes from 'prop-types'
import SocialInstagramIcon from '../atoms/icons/SocialInstagram'
import SocialGithubIcon from '../atoms/icons/SocialGithub'
import SocialLinkedinIcon from '../atoms/icons/SocialLinkedin'
import SocialMediumIcon from '../atoms/icons/SocialMedium'
import SocialTwitterIcon from '../atoms/icons/SocialTwitter'
import SocialLinks from '../../../../socialConstants'

const Link = styled.a`
  cursor: pointer;
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:.6em;
  border:1px dotted #6B6B6B;
  border-left: none;
  border-right: none;
  padding:.7em;

  // used to space the icons from one-another
  div {
      margin:0 .5em;
  }
`

const SocialIconBar = (props) => {
  return (
    <Frame>
      <Link href={SocialLinks.INSTAGRAM} target='_blank'><SocialInstagramIcon /></Link>
      <Link href={SocialLinks.GITHUB} target='_blank'><SocialGithubIcon /></Link>
      <Link href={SocialLinks.LINKEDIN} target='_blank'><SocialLinkedinIcon /></Link>
      <Link href={SocialLinks.MEDIUM} target='_blank'><SocialMediumIcon /></Link>
      <Link href={SocialLinks.TWITTER} target='_blank'><SocialTwitterIcon /></Link>
    </Frame>
  )
}

SocialIconBar.propTypes = {

}

export default SocialIconBar
