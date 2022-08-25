import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';
import RestAPI from './pages/RestAPI.js';
import Main from './pages/Main';
import Signup from './pages/Signup';
import ImageList from './pages/ImageList';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AI from "./pages/AI";
// import { AiOutlinePicture } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        {/* <RecoilRoot> */}
          <Navbar/>
          {/* <AiOutlinePicture  className='react-icon'/> */}
            <Routes>
                <Route path='/' element={<RestAPI/>}></Route>
                <Route path='/1' element={<Main/>}></Route>
                <Route path='/main' element={<RestAPI/>}></Route>
                <Route path='/dmd' element={<Home/>}></Route>
                <Route path='/ImageList' element={<ImageList/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/AI' element={<AI/>}></Route>

            </Routes>
            {/* </RecoilRoot> */}
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

