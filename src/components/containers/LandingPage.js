import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../SideDrawer/Backdrop'
import LandingContent from '../Contents/LandingContent'

class LandingPage extends Component {
    state = {
        sideDrawerOpen: false
    };
    drawerToggleClickHandle = () => { //pass it as prop (reference) to the component that hold the button that fire the action <Toolbar/>*/
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }; //set to be the OPPOSITE of the previous state
        })
    };
    backDropCloseHandler = () => {
        this.setState({ sideDrawerOpen: false }); //don't need to set a prevState beacuse it has to handle a function that always close the sideDrawer
    }
    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) { //initially we don't see the the 2 components because state is set to false*/
            backdrop = <Backdrop clickToCloseSlider={this.backDropCloseHandler}/>
        }
        return (
            <div className="landing-container" >
                <Toolbar drawerClickHandler={this.drawerToggleClickHandle} />
                <SideDrawer show={this.state.sideDrawerOpen}/> 
                {backdrop}
                <LandingContent />
            </div>
        )
    }
}

export default LandingPage;