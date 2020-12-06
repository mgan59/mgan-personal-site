import styled from 'styled-components'
import PropTypes from 'prop-types'
import SocialInstagramIcon from '../atoms/icons/SocialInstagram'
import SocialGithubIcon from '../atoms/icons/SocialGithub'
import SocialMediumIcon from '../atoms/icons/SocialMedium'
import SocialTwitterIcon from '../atoms/icons/SocialTwitter'

const Link = styled.a`
  
  
  
  cursor: pointer;



`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  div {
      margin:0 .5em;
  }
`

const SocialIconBar = (props) => {
  return (
    <Frame>
      <SocialInstagramIcon />
      <Link href='https://www.github.com/mgan59/' target='_blank'><SocialGithubIcon /></Link>
      <SocialMediumIcon />
      <Link href='https://www.twitter.com/mgan/' target='_blank'><SocialTwitterIcon /></Link>
    </Frame>
  )
}

SocialIconBar.propTypes = {
  // selected: PropTypes.string
}

export default SocialIconBar
