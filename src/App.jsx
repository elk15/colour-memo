import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats'
import Cards from './components/Cards';


function App() {

  return (
    <>
      <header>
        <Title/>
        <Stats/>
      </header>
      <main>
        <Cards/>
      </main>
    </>
  )
}

export default App
