import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../componet/bottle/bottle";
import './bottles.css'
import bottle from "../componet/bottle/bottle";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[]);

    const handleAddCard = bottle =>{
        const newCard = [...card, bottle]
        setCard(newCard)
    }
    
    return (
        <div>
            <h2>Bottle Here:{bottles.length}</h2>
            <h3>Cart: {card.length}</h3>
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddCard={handleAddCard} bottle={bottle}></Bottle>)
            }
           </div>
        </div>
        
    )
};

export default Bottles;