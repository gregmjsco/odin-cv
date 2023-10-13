import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/General-Info'
import Preview from '../components/Preview'

function App() {

 

  return (
    <>
    <div className='container'>
      <form action="">

        <div className="left">

          <GeneralInfo />

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
