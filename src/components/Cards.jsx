import '../styles/Cards.css';

function Card() {
    return (
        <div className="card" data-color="red">
            <div className="color"></div>
            <p className="color-text">Red</p>
        </div>
    )
}

export default function Cards() {
    return (
        <div id="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}