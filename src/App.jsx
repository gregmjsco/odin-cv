import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/General-Info'
import Preview from '../components/Preview'

function App() {

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '', 
  });

  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
     [field]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <>
    <div className='container'>
      <form action="" onSubmit={handleFormSubmit}> 
        <div className="left">
          <GeneralInfo formData = {formData} onFormChange = {handleFormChange}/>
        </div>
      </form>
      <div className="right">
        <Preview formData = {formData} />
      </div>
    </div>
    </>
  )
}

export default App
