import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats'
import Cards from './components/Cards';
import { useEffect } from 'react';


function App() {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    (gameState === 'next level') && setLevel(level + 1);

    return () => {
      setGameState('');
    }
  }, [gameState, level])

  useEffect(() => {
    (score > highScore) && setHighScore(score);
  }, [score, highScore])

  return (
    <>
      <header>
        <Title/>
        <Stats level={level} score={score} highScore={highScore}/>
      </header>
      <main>
        <Cards level={level} setGameState={setGameState} setScore={setScore} score={score}/>
      </main>
    </>
  )
}

export default App
