import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/General-Info'
import Education from '../components/Education'
import Header from '../components/Header'

function App() {

  return (
    <>
      <Header />
      <GeneralInfo />
      <Education />
    </>
  )
}

export default App
