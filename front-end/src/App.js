import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup'
import Formtwo from './Components/Formtwo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formthree from './Components/Formthree';
import Task from './Components/Task';
import Navebar from './Components/Navebar';
import User from './Components/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dynamic from './Components/Dynamic';




const App = () => {
  return (
    <div className="App" >
      <BrowserRouter>
      <Navebar/>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/user" element={<User />} />
        <Route path="/formthree" element={<Formthree/>} />
        <Route path="/formtwo" element={<Formtwo/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/user/:id" element={<Dynamic/>} />

      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
