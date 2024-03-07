import React from 'react'
import message1 from '../assets/items/messages-1.jpg'
import message2 from '../assets/items/messages-2.jpg'
import message3 from '../assets/items/messages-3.jpg'


function NavMessage() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow message'>
                <li className='dropdown-header'>
                    You have 3 new message
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img  src={message2} alt="" className='rounded-circle' />
                    </a>
                    <div>
                        <h6>Anna Nelson</h6>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>
                    <a href="#">
                        <img  src={message1} alt="" className='rounded-circle' />
                    </a>
                    <div>
                        <h6>Maria Hudson</h6>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src={message3} alt="" className='rounded-circle' />
                    </a>
                    <div>
                        <h6>David Muldon</h6>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <i className='dropdown-footer'>
                    <a href="#"> Show all messages</a>
                </i>
            </ul>
        </li>
    )
}

export default NavMessage
