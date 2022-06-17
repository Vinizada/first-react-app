import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "pages/Home";
import Navbar from "components/Navbar";
import React from 'react';
import { render } from '@testing-library/react';

const Rotas = () =>{

    render() {
    return (
        <Router><Switch><Route path="/"><Home/></Route></Switch></Router>


    );
    }
}

export default Rotas;