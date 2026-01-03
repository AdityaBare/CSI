import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Team from './pages/Team'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Profile from './pages/Profile'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
