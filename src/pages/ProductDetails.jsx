import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";
import { getProduct } from "../redux/slices/ProductSlice";
import * as api from "../api";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await dispatch(getProduct(id)).unwrap();
    };
    fetchProduct();
  }, [id]);
  const product = useSelector((state) => state.product?.product);
  const products = useSelector((state) => state.product?.products);
  const { name, main_img, price, catagory, size_range, des, _id } = product;

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product._id,
        productName: product.name,
        price: product.price,
        imgUrl: product.grid_img,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <Helmet title={name}>
      <CommonSection title={name} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={main_img} alt="img" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{name}</h2>
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
                  <span>{catagory} </span>
                </div>
                <div className="product__size">
                  <h5>Size: </h5>
                </div>
                <div className="product__size">
                  {size_range?.map((i) => (
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
                <p className="mt-3">{des}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like </h2>
            </Col>
            <ProductsList data={products.slice(0, 3)} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
