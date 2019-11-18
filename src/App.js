import React from 'react';
import 'reset-css';
import './App.css';
import './fonts/fonts.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
    return (
        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
