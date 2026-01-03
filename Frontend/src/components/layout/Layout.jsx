import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth' || location.pathname === '/login'
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  )
}
