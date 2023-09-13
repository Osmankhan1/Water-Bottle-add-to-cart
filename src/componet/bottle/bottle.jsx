import './bottle.css'

const bottle = ({bottle, handleAddCard}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h2>Name: {name}</h2>
            <h2>Price: ${price}</h2>
            <img src={img} alt="" />
            <button className='btn1' onClick={()=>handleAddCard(bottle)}>Purchase</button>
        </div>
    );
};

export default bottle;