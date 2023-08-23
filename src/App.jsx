import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats'


function App() {

  return (
    <>
      <header>
        <Title/>
        <Stats/>
      </header>
    </>
  )
}

export default App
