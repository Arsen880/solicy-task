import './App.css';
import CardsContainer from "./components/cardsContainer/CardsContainer";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import React, { useState } from 'react';

const getCards = function () {
    const cards = localStorage.getItem('cards') || '[]';
    return JSON.parse(cards);
}

function App() {
    const [cards, setCards] = useState(getCards());
    console.log(cards)

    return (
        <>
            <Footer/>
            <Sidebar/>
            <CardsContainer cards={cards} setCards={setCards} />
        </>

    );
}

export default App;
