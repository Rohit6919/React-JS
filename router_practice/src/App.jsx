import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/"element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return <div>
        <Link to="/">HOME</Link>
        |
        <Link to="/Contact">Contact</Link>
        |
        <Link to="/SignUp">SignUp</Link>  

        <div>
          <Outlet />
        </div>
        <Link to="/Footer">Footer</Link>
        |
        <Link to="/HelpDesk">HelpDesk</Link>
  </div>
}

function Errorpage() {
  return <h1>404 Error</h1>
}

function Home() {
  return <h1>This is my home page</h1>
}

function Contact() {
  return <h1>This is my contact page</h1>
}

function Signup() {
  return <h1>This is my signup page</h1>
}

export default App
