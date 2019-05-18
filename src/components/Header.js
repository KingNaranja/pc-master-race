import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.png'
import NavBarContainer from './NavBarContainer';
import { Link } from 'react-router-dom'
// import  NavBarContainer  from './NavBarContainer'




const Header = props  => {

  const MainHeader = styled.header`
    position: relative;
    height: 10vh;
    width: 100%;
    background-color: #23242C;
    align-items: center;
    display: flex;
    padding: 0 20px;
    animation: descend 1s ease-in-out ;
    .link{
      max-width:50%;
    }
    .logo{
      max-width: 100%;
      height: auto;
    }
    @keyframes descend {
      from{transform: translateY(-10vh) }
      to{transform: translateY(0vh)}
    }
    .scroll {
      position: fixed;
      top: 0;
      left: 0;
    }
    
  `

  return (
    <MainHeader>
      <Link to='/' className='link' >
        <img className='logo' src={ logo } alt="PCMASTERRACE" />
      </Link>

      <NavBarContainer />
    </MainHeader>
)}

export default Header 