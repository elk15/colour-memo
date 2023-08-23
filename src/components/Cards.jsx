import { useEffect, useState } from 'react';
import '../styles/Cards.css';

function Card({hexCode, name, handleClick}) {
    return (
        <div className="card" data-color={hexCode} onClick={handleClick}>
            <div className="color" style={{backgroundColor : hexCode}}></div>
            <p className="color-text" style={{color : hexCode}}>{name}</p>
        </div>
    )
}

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

export default function Cards({level, setGameState}) {
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

    const handleCardClick = (e) => {
        const hexCode = e.currentTarget.dataset.color;
        const array = [...colorsArray];
        array.map((color) => {
            if (color.hex === hexCode) {
                if (color.isClicked) {
                    setGameState('game over');
                } else {
                    color.isClicked = true;
                }
            }
        })
        setColorsArray(shuffleArray(array));
        (checkIfAllAreClicked()) && setGameState('next level');
    }

    const checkIfAllAreClicked = () => {
        for(let i = 0; i < colorsArray.length; i++) {
            if (!colorsArray[i].isClicked) {
                return false;
            }
        }
        return true;
    }

    useEffect(() => {
        generateColorsArray(level);
    }, [level]);

    return (
        <div id="cards">
            {colorsArray.map((color) => {
                return <Card key={color.hex} 
                hexCode={color.hex} 
                name={color.name}
                handleClick={handleCardClick}/>;
            })}
        </div>
    )
}