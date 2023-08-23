import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats'
import Cards from './components/Cards';


function App() {
  const [level, setLevel] = useState(1);

  return (
    <>
      <header>
        <Title/>
        <Stats level={level}/>
      </header>
      <main>
        <Cards level={level}/>
      </main>
    </>
  )
}

export default App
