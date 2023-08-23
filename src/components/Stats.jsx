import '../styles/Stats.css';


export default function Stats({level, score, highScore}) {
    
    return (
        <div id="stats">
            <h2>Level: <span id="level">{level}</span></h2>
            <div>
                <h3>Score: <span id="score">{score}</span></h3>
                <h3>High Score: <span id="high-score">{highScore}</span></h3>
            </div>
            <hr/>
        </div>
    )
}