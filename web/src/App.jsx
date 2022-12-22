import {  BrowserRouter, Routes, Route,  } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './Components/login'
import Signup from './Components/signup'
import './index.css'
import NotFound from "./NotFound";

function App() {

  return (
    <div className="App">
           <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path={"/"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
