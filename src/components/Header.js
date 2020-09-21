import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
        <header>
            <Link to='/addtech' className='navbar'>
                Add Tech
            </Link>
            <Link to='/techlist' className='navbar'>
                Tech Equipment
            </Link>
        </header>
    </React.Fragment>
    )
}

export default Header
