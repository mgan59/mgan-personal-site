import styled from 'styled-components'
import PropTypes from 'prop-types'

const NavMenuList = styled.ul`
  width:100%;
  margin-top:1.8em;
`

const NavMenuItem = styled.li`
 
 float:left;
 list-style:none;
 margin-right:1.4em;
`

const NavLink = styled.a`
  
  border-bottom: ${props => props.isSelected ? '3px solid #50BEB8' : 'none'};
  font-size: 1.2em;
  
  font-family: 'Roboto Slab';
  font-weight: 600;
  color: #000;
  text-decoration: none;
  /* identical to box height, or 196% */
  letter-spacing: 0.15px;




`
const NavMenu = (props) => {
  let home = false
  let about = false
  let contact = false

  switch (props.selected) {
    case 'home':
      home = true
      break
    case 'about':
      about = true
      break
    case 'contact':
      contact = true
      break
    default:
      break
  }

  return (
    <NavMenuList>
      {/*
      <NavMenuItem>
        <NavLink href='/home' isSelected={home}>Home</NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink href='/about' isSelected={about}>About</NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink href='/contact' isSelected={contact}>Contact</NavLink>
      </NavMenuItem>
      */}
    </NavMenuList>
  )
}

NavMenu.propTypes = {
  selected: PropTypes.string
}

export default NavMenu
