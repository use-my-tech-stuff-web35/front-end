import React from 'react';
import {Link} from 'react-router-dom';
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
                        <Link to='/items' className="navbar" >Home</Link>
                        <Link to="/items/new" className="navbar" >Add Tech</Link>
                        <Link to='/' className="navbar" onClick={() => submitLogout()}>
                            Logout
                        </Link>
                </StyledHeader>
         </div>
    )
}

export default Navigation;
