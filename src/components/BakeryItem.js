// TODO: create a component that displays a single bakery item
import "../style.css"

const BakerItem = ({item, setCart}) => {
    const addCart = () => {
        setCart(item.name, item.price)
    }

    return (
        <div className="card-info">
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="card-footer">
                <p>{item.price}</p>
                <button onClick={addCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BakerItem;