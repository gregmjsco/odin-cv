import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/General-Info'
import Education from '../components/Education'
import Header from '../components/Header'
import Preview from '../components/Preview'
import Experience from '../components/Experience'

function App() {

  return (
    <>
    <div className='container'>
      <div className="left">
        <Header />
        <GeneralInfo />
        <Education />
        <Experience />
      </div>

      <div className="right">
        <Preview />
      </div>
    </div>
    </>
  )
}

export default App
