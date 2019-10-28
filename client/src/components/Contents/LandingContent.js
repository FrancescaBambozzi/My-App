import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo1.png'
import Carousel from './Carousel';

const LandingContent = () => (
    <div className="container">
        <main style={{ marginTop: '64px' }}>
            <img className="logo" src={logo} alt="logo" />
            <h1>Find your perfect trip, designed by insiders who know and love their city.</h1>

            <Link to="/cities" className="cta">
                <span>Start your journey</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </Link>
            <div>
                <Carousel />
            </div>
        </main>
    </div>
)

export default LandingContent;