import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/Cart/CartAction";
import "./Card.css";

const Card = ({ title, des, price, image,id }) => {
  let dispatch = useDispatch();

  const cartItem = () => {
    dispatch(addCartItem({ title, des, price, image,id }));
  };
  return (
    <div className="card__style">
      <div className="card card__style text-center p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{des}</p>

        <img src={image} className="card-img-top image__style" alt="..." />
        <div className="card-body">
          <h4 className="card-text text-danger ">Price: {price}Taka</h4>
          <h5 className="star__style d-flex">
            {Array(5)
              .fill()
              .map((_) => {
                return <p className=" ">🌟</p>;
              })}
          </h5>
          <button onClick={cartItem} className="btn btn-outline-warning">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
