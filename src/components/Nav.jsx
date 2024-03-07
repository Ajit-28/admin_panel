import React from 'react'

import './css/nav.css'

import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

function Nav() {
    return (
        <div className='header-nav ms-auto'>
            <ul className='d-flex align-items-center'>
                <NavNotice />
                <NavMessage />
                <NavAvatar />
            </ul>
        </div>
    )
}

export default Nav
