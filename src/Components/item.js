import React from "react";

export default function Product(props) {
  return (
    <div className="item">
      {/* <div className="item-img">
        <img
          src={props.product.img}
          className="i-img  "
          alt={props.product.name}
        />
      </div> */}
      <div className="info">
        <h3 style={{ textAlign: "center" }} className="item-name">
          {props.product.name}
        </h3>
      </div>

      <div className="sell-info">
        <a href="#" className="price ">
          ${props.product.price}
        </a>
        <div className="quantity-opt">
          <button
            type="button"
            class="btn btn-dec "
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <a class="quantity ">{props.product.quantity}</a>
          <button
            type="button"
            class="btn btn-inc "
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="onekindofprice">
        ${props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
