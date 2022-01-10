import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default class App extends React.Component {
  
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </BrowserRouter>
        )
    }
}