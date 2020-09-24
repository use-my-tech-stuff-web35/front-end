import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../utils/Untitled-2.png'


const StyledHeader = styled.header`
background-color:white;
display:flex;
.img-div{
  width:20%;
  & img{
    width:50%;
    margin:2%;
  }
}
.links{
display:flex;
justify-content:flex-end;
font-size:1.5rem;
width:79%;
align-items:center;
margin-right:8%;
}
a{
  color:#102542;
  margin:1%;
  text-decoration:none;
}

`

const Navigation = () => {

  const submitLogout = () => {
    localStorage.removeItem('user');
  }
  return (
    <div>
      <StyledHeader>
        <div className='img-div'>
          <img src={logo} alt='logo' />
        </div>
        <div className='links'>
        <Link to='/items' >Home</Link>
        <Link to="/items/new" >Add Tech</Link>
        <Link to='/' onClick={() => submitLogout()}>
          Logout
                        </Link>
                        </div>
      </StyledHeader>
    </div>
  )
}

export default Navigation;
