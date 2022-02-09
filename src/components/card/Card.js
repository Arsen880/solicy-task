import React from 'react';
import './Card.css'

const Card = ({value, cards, setCards}) => {

const removeCard = () =>{
    cards.splice(cards.indexOf(value) , 1)
    setCards([...cards])
    localStorage.setItem('cards' , JSON.stringify(cards))
}

    return (
        <div className="cardContainer">
            <div className="cardContainer-header">
                <button onClick={removeCard} className='deleteButton'>X</button>
            </div>
            <div className="cardContainer-content">
                <h1>{value}</h1>
            </div>
        </div>
    );
};

export default Card;
