import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Calendars from './pages/Calendars'
import Settings from './pages/Settings'
import Team from './pages/Team'
import LogOut from './pages/LogOut'
import Task from './pages/Task'
import LogIn from './pages/LogIn'    
import SignUp from './pages/SignUp' 
import About from './pages/About' 

export default function  App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>/</Route>
        <Route path="/dashboard" element={<Dashboard/>}>/Dashboard</Route>
        <Route path="/team" element={<Team/>}>/Team</Route>
        <Route path="/tasks" element={<Task/>}>/Task</Route>
        <Route path="/calendar" element={<Calendars/>}>/Calendar</Route>
        <Route path="/settings" element={<Settings/>}>/Settings</Route>
        <Route path="/log-out" element={<LogOut/>}>/LogOut</Route>
        <Route path="/log-in" element={<LogIn/>}>/Log-In</Route>        
        <Route path="/register" element={<SignUp/>}>/SignUp</Route>  
        <Route path="/about" element={<About/>}>/About</Route>  
  
      </Routes>
    </BrowserRouter>
  )
}

