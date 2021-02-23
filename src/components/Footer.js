import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="socialmedia-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">Arktech 3D</Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link-instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className='fab fa-instagram' />
                        </Link>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default Footer
