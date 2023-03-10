import React, { useRef, useState } from "react";
import OrderItem from "./OrderItem";

export default function PurchasedOrder({ order }) {
  const seeMoreBtn = useRef(null);
  const itemsContainer = useRef(null);
  const [choice, setChoice] = useState("more");

  const toggleSeeMore = () => {
    if (choice === "more") {
      setChoice("less");
    } else setChoice("more");
    itemsContainer.current.classList.toggle("active");
  };

  return (
    <li className="order-container w-75 mx-auto d-flex flex-column">
      <div className="d-flex justify-content-between">
        <h5>Order ID: {order.order_id}</h5>
        <h5>Date: waiting for api</h5>
      </div>
      <hr></hr>
      <div className="items-container col text-center" ref={itemsContainer}>
        {order.orderItems.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>
      {order.orderItems.length === 1 ? (
        <span></span>
      ) : (
        <span
          className="see-more fs-5"
          ref={seeMoreBtn}
          onClick={toggleSeeMore}
        >
          See {choice}
        </span>
      )}
      <hr></hr>
      <h5>Total: $ {order.totalAmount}</h5>
    </li>
  );
}
