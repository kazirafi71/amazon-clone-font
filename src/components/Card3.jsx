import React from "react";
import "./Card2.css";
import {useDispatch} from 'react-redux'
import { addCartItem,removeCartItem } from "../store/Cart/CartAction";

const Card3 = ({ title, des, price, image,id }) => {
  let dispatch = useDispatch();
  const removeCart=()=>{
    dispatch(removeCartItem({ title, des, price, image,id }));
  }
  return (
    <div className="">
      <div className="card  text-center p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{des}</p>

        <img src={image} className="card-img-top image_style" alt="..." />
        <div className="card-body">
          <h4 className="card-text text-danger ">Price: {price}Taka</h4>
          <h5 className="star_style d-flex">
            {Array(5)
              .fill()
              .map((_) => {
                return <p className=" ">🌟</p>;
              })}
          </h5>
          <button onClick={removeCart} className="btn btn-outline-warning">Remove cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
