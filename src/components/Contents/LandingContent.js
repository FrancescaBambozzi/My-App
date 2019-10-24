import React from 'react';
import logo from '../../assets/img/logo1.png'

const LandingContent = () => (
    <div className="landing-container">
        <main style={{ marginTop: '64px' }}>
            <img className="logo" src={logo} alt="logo" />
            <p>this is the page content</p>
        </main>
    </div>
)

export default LandingContent;