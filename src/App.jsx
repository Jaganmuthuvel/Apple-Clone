import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Header2 from "./components/Header2"
import Article from "./components/Article"
import Footer from "./components/Footer"





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Header2 />
      <Article />
      <Footer />
      
    </>
  )
}

export default App
