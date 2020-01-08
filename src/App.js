import React from 'react';
import 'reset-css';
import './App.css';
import './fonts/fonts.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from "react-scroll-up-button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
    return (
        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
            <ScrollUpButton ContainerClassName="scrollToTop"
                            TransitionClassName="scrollToTopTransition"
                            EasingType="easeInBack"
                            AnimationDuration={700}
                            ShowAtPosition={400}>
                <div><FontAwesomeIcon icon={faChevronUp}/></div>
            </ScrollUpButton>

        </div>
    );
}

export default App;
