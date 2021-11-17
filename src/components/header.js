import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CgLoadbarSound } from 'react-icons/Cg';
import { RiSearchLine } from 'react-icons/Ri';
import { menuData } from '../data/MenuData'
import logo from '../images/logo.png';




const Header = ({toggle}) => {
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 300 ){
        setScroll(true)
    }else{

        setScroll(false)
    }
}

useEffect(() => {
  changeNav()
  window.addEventListener("scroll", changeNav)
  }, []) 
  
  return(
  <Nav active={scroll} >
    <Avatar src={logo}/>
    <Bars active={scroll} onClick={toggle} />
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink active={scroll} to={item.link} key={index}>
          {item.title}
          
        </NavLink>
      ))}
      <SearchBtn><Search active={scroll} /></SearchBtn>
      
    </NavMenu>
  </Nav>
  
)
}
export default Header

const Nav = styled.nav`
transition: 0.5s all ease-in-out;
background: ${({active}) => (active ? "#000" : "#fff")};
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1400px) / 2);
z-index: 999;
top: ${({active}) => active ? "-80px" : "none"};
top: ${({active}) => active ? "0" : "-80px"};
position: sticky;
`
const NavLink = styled(Link)`
color: ${({active}) => (active ? "#fff" : "#000")};
display: flex;
font-size: 18px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`
const Avatar = styled.img`
color: #000;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`
const SearchBtn = styled(Link)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem 0 3rem;
height: 100%;
cursor: pointer;

`

const Bars = styled(CgLoadbarSound)`
display: none;
color: ${({active}) => (active ? "#fff" : "#000")};
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, 38%) rotate(-90deg);
  font-size: 2.8rem;
  cursor: pointer;
}
`
const Search = styled(RiSearchLine)`
color: ${({active}) => (active ? "#fff" : "#000")};

@media screen and (max-width: 768px) {
  display: none;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
  display: none;
}
`