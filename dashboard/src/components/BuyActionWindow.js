import React, { useState, useContext } from "react"; // 1. Import useContext
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext"; // We still need this for the hook
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid,mode }) => {
    const [stockQuantity,setStockQuantity] = useState(1);
    const [stockPrice,setStockPrice] = useState(0.0);

    let { closeActionWindow} = useContext(GeneralContext);

    const handleActionClick = () => {

  axios
    .post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode,
    })
    .then((response) => {
      // This .then() block will now run because the server sends a response
      console.log("Server response:", response.data.message);
      closeActionWindow();
    })
    .catch((err) => {
      console.error("Failed to create order:", err);
    });
    }
    const handleCancelClick = ()=>{
      closeActionWindow();
    }
    let toss = mode === "BUY"? "btn-blue" : "btn-red";
    const formattedMode = mode.charAt(0) + mode.slice(1).toLowerCase();

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* ... your JSX remains the same ... */}

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e)=>setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price.</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e)=>setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className={`btn ${toss}`} to="#" onClick={handleActionClick}>
            {formattedMode}
          </Link>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;