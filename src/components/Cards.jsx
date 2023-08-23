import { useEffect, useState } from 'react';
import '../styles/Cards.css';

function Card({hexCode, name}) {
    return (
        <div className="card" data-color={hexCode}>
            <div className="color" style={{backgroundColor : hexCode}}></div>
            <p className="color-text" style={{color : hexCode}}>{name}</p>
        </div>
    )
}

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export default function Cards({level}) {
    const [colorsArray, setColorsArray] = useState([]);

    const generateColorsArray = async (level) => {
        let newColors = [];
        for (let i = 0; i < level + 3; i++) {
            let r = randomBetween(0, 254);
            let g = randomBetween(0, 254);
            let b = randomBetween(0, 254);
            const response = await fetch(`https://www.thecolorapi.com/id?rgb=${r},${g},${b}`);
            const data = await response.json();
            newColors = [...newColors, {hex: data.hex.value, name: data.name.value, isClicked: false}];
        }
        setColorsArray(newColors);
    }

    useEffect(() => {
        generateColorsArray(level);
    }, [level]);

    return (
        <div id="cards">
            {colorsArray.map((color) => {
                return <Card key={color.hex} hexCode={color.hex} name={color.name}/>;
            })}
        </div>
    )
}