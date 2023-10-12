import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/General-Info'
import Education from '../components/Education'
import Header from '../components/Header'
import Preview from '../components/Preview'
import Experience from '../components/Experience'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can gather form data and perform actions based on the data
  };

  return (
    <>
    <div className='container'>
      <form action="" onSubmit={handleSubmit}>

        <div className="left">
          <Header />
          <GeneralInfo />
          <Education />
          <Experience />
        </div>

      </form>

      <div className="right">
        <Preview />
      </div>
    </div>
    </>
  )
}

export default App
