import React from 'react';
import Home from '../comp/Home';
import About from '../comp/About';
import Dynamic from '../comp/Dynamic';


// import {useRoutes} from 'hookrouter';

const myRoutes = {
    '/': () => <Home />,
    '/about': () => <About />,
    '/dynamic': () => <Dynamic />

}

export default myRoutes;