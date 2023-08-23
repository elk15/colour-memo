import '../styles/Stats.css';


export default function Stats({level, score, highestScore}) {
    
    return (
        <div id="stats">
            <h2>Level: {level}</h2>
            <div>
                <h3>Score: {score}</h3>
                <h3>Highest Score: {highestScore}</h3>
            </div>
            <hr/>
        </div>
    )
}