import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => ( /*pass the function define in LandingPage as a prop to the button that fires the action -
                                then, pass the click prop to the button component itself (same procedure, always pass props from parent to child)*/
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href=""><i class="fas fa-user-circle fa-lg"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
);

export default Toolbar