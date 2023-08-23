import '../styles/Stats.css';


export default function Stats({level}) {
    
    return (
        <div id="stats">
            <h2>Level: <span id="level">{level}</span></h2>
            <div>
                <h3>Score: <span id="score">0</span></h3>
                <h3>High Score: <span id="high-score">0</span></h3>
            </div>
            <hr/>
        </div>
    )
}