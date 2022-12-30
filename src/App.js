import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Contact from './Pages/Contact'
import './App.css';
import AddressBar from './Pages/AddressBar';
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer';
import Error from './Pages/Error';
import Blog from './Pages/Blog';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AddressBar />
      <NavBar />
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/blog' element = {<Blog/>}></Route>
          <Route path='/services' element = {<Services/>}></Route>
          <Route path='/team' element = {<Team/>}></Route>
          <Route path='/contact' element = {<Contact/>}></Route>
          <Route path='*' element = {<Error/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
