// import logo from './logo.svg';
import './App.css';
import {useRoutes, A} from 'hookrouter';

import router from './router';
// import ReactDOM from 'react-dom';
// import Home from './comp/Home';
// import About from './comp/About';
// import Dynamic from './comp/Dynamic';

// import myRoutes from './routes/index';



// const myRoutes = {
//     '/': () => <Home />,
//     '/about': () => <About />,
//     '/dynamic': () => <Dynamic />

// }

const App = () => {

    const routeResult = useRoutes(router);
    return (
        <div>
            <A href = '/' > Home </A> 
            <A href = '/about' > About </A>
            <A href = '/dynamic' > Dynamic </A>
            {routeResult}
        </div>
    );
}

export default App;
