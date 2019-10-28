import React from 'react';
import { Link } from 'react-router-dom'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer'; //to use CSS to set if is visible or not
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cities">Cities</Link>
                </li>
                <li>
                    <Link to="/my-itinerary">My Itinerary</Link>
                </li>
                <li>
                    <Link to="/signup">Create Account</Link>
                </li>
            </ul>
        </nav>
    )
};

export default sideDrawer;