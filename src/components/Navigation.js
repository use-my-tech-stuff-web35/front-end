import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const NavContent=styled.div`
    width: 90%;
    margin: 0 auto;
    list-style: none;
    
`

const Navigation = () => {
    const submitLogout = () => {
        localStorage.removeItem('user');
    }
    return (
        <div>           
                <NavContent>
                    
                        <Link to='/items' >Home</Link>
                        <Link to="/items/new" >Add Tech</Link>
                        <Link to='/' onClick={() => submitLogout()}>
                            Logout
                        </Link>
                   
                </NavContent>
         </div>
    )
}

export default Navigation;
