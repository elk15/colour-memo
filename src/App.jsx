import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats'
import Cards from './components/Cards';
import { useEffect } from 'react';


function App() {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState('');

  useEffect(() => {
    if (gameState === 'next level') setLevel(level + 1);

    return () => {
      setGameState('');
    }
  }, [gameState, level])

  return (
    <>
      <header>
        <Title/>
        <Stats level={level}/>
      </header>
      <main>
        <Cards level={level} setGameState={setGameState}/>
      </main>
    </>
  )
}

export default App
