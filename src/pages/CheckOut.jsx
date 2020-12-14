import React from "react";
import { useSelector } from "react-redux";
import Card3 from "../components/Card3";
import "./checkout.css";

const CheckOut = () => {
  const { cart } = useSelector((state) => state);

  const [cartItems, setCartItems] = [cart.cartInfo];
  
  let x = cartItems.length;
  if (cartItems.length === 0) {
    return <h1 className="cart__items text-center">No cart Items</h1>;
  }



  return (
    <div>
      <div className="container py-5 ">
        <div className="row pt-5 g-4">
          <h2>Your total cart items is : {cartItems.length}</h2>
          {cartItems.map((val) => {
            
            return (
              <div className="col-md-4">
                <Card3
                  title={val.title}
                  des={val.des}
                  image={val.image}
                  price={val.price}
                  id={val.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
