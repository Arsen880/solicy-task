import React from 'react';
import Card from "../card/Card";
import "./CardsContainer.css";

const CardsContainer = ({cards, setCards}) => {
    const getUniqueNumber = () => { 
        const min = 1
        const max = 1000;
        const number = Math.floor(Math.random() * (max - min) + min);
        return cards.includes(number) ? getUniqueNumber(): number;
    } 

    const addCard = () => {
        const newCards = [...cards, getUniqueNumber()];
        setCards(newCards)
        localStorage.setItem('cards', JSON.stringify(newCards))
    }

    const sortCard = () =>{
        cards.sort((a, b) => {
            return a - b;
          })
        setCards([...cards])
        localStorage.setItem('cards', JSON.stringify(cards))
    }

    return (
    <>
        <div className="headerContainer">
             <button className='navigationBtn' onClick={addCard}>add card</button>
             <button className='navigationBtn' onClick={sortCard}>sort card</button>
        </div>
        <div className='cardsContainer'>
            {cards.map(item=>{
                return (
                    <Card cards={cards} setCards={setCards} value={item} key={item} />
                )
            })}
        </div>
    </>
    );
};

export default CardsContainer;
