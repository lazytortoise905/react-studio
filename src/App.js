import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakerItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState(new Map());
  const [cost, setCost] = useState(0);
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const addCart = (name, price) => {
    setCart(new Map(cart.set(name, cart.get(name) ? cart.get(name) + 1 : 1)))
    setCost(cost + price)
  }

  return (
    <div className="App">
      <div className="app-divider">
        <div className="bakery-divider">
          <h2>Nicholas's Bakery</h2>
          <div className="bakery-items">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components\
              <BakerItem 
                key={index}
                item={item}
                setCart={addCart}
              ></BakerItem>
            ))}
          </div>
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {Array.from(cart).map(([val, key], index) => <p key={index}><strong>{key}</strong> : {val}</p>)}
          {cost !== 0 && <h2>Cost: {cost.toFixed(2)}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
