import React from 'react'
import './css/logo.css'


function Logo() {
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }
    return (
        <div style={{height: '35px', display: 'flex'}}>
            <a href="/" className='logo d-flex align-items-center text-decoration-none p-1'>
                <span className='d-done d-lg-block'>AdminDashboard</span>
            </a>
            <i className="icon bi bi-list fs-4" onClick={handleToggleSidebar} style={{cursor: 'pointer'}}></i>
        </div>
    )
}

export default Logo
