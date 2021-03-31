// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useRoutes, A, useRedirect} from 'hookrouter';

// import routes from './router_old';
import routes from './router';
import NoPageFound from "./components/NoPageFound";
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

// const App = () => {
function App() {
//   useRedirect('/user', '/about', '/contact');
  const routeResult = useRoutes(routes);

//   return routeResult;  


  return (
    <div className="App">
      <A href="/user">Users Page</A> <br />
      <A href="/about">About Page</A>
      <br />
      <A href="/contact">Contacts Page</A> <br />
      {routeResult || <NoPageFound />}
    </div>
  );

}

export default App;
