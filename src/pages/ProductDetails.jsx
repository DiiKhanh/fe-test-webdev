import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const {
    name: productName,
    main_picture_url: imgUrl,
    retail_price_cents: price,
    category,
    size_range,
    color,
  } = product;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.name,
        price: product.retail_price_cents,
        imgUrl: product.grid_picture_url,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="img" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div className="product__category">
                    {" "}
                    Rank:
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                </div>
                <h6>SKU: {id}</h6>
                <div className="d-flex align-items-center gap-2">
                  <span className="product__category">Price:</span>
                  <span className="product__price">${price}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="product__category">Category: </span>
                  <span>{category} </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="product__category">Color: </span>
                  <span>{color} </span>
                </div>
                <div className="product__size">
                  <h5>Size: </h5>
                </div>
                <div className="product__size">
                  {size_range.map((i) => (
                    <button className="size" key={i}>
                      {i}
                    </button>
                  ))}
                </div>
                <div className="mt-5">
                  <h6 className="tab__wrapper">
                    FREE SHIPPING NATIONWIDE AND FREE SOCKS WHEN ORDERING ONLINE
                  </h6>
                </div>
                <p className="mt-3">
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusamus, facere, voluptatibus dolorem
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
