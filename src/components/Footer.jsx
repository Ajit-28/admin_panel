import React from 'react'

import './css/footer.css'

function Footer() {
    return (
        <footer id='footer' className='footer'>
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span> Admin Panel Demo</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="#">XYZ</a>
            </div>
        </footer>
    )
}

export default Footer
