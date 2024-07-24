import React from 'react'
import notfound from './header/header_images/page_not_found.jpg'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <div className='container'>
                <div className='not-found'>          
                    <img src={notfound} alt='' />
                    <div className='backtohome'>
                        <Link to="/"><button>Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound