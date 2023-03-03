import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { color, motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [productsData, setProductsData] = useState(products);
  let dem = 0;
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const searchedValue = products.filter((item) =>
      item.productName.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductsData(searchedValue);
  };
  const {
    name: productName,
    main_picture_url: imgUrl,
    retail_price_cents: price,
    category, size_range, color

  } = product;

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>

                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div className="product__Category"> Rank :
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
                <div className="d-flex align-items-center gap-5">
                  <span className="product__Category">Price:</span>
                  <span className="product__price" >${price}</span>
                </div>
                <div>
                  <span className="product__Category">Category:  </span>
                  <span >{category} </span>
                </div>
                <div>
                  <span className="product__Category">Color:  </span>
                  <span >{color} </span>
                </div>
                <div className="product__size" ><h5>Size: </h5></div>
                <div className="product__size">

                  {size_range.map((i) =>
                    <button className="size">{i}</button>

                  )}
                </div>
                <div><h6 className="tab__wrapper">FREE SHIPPING NATIONWIDE AND FREE SOCKS WHEN ORDERING ONLINE</h6></div>
                {/* <p className="mt-3">({shortDesc})</p> */}
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  Add To Cart
                </motion.button>
              </div>


            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <center> <h2 className="product__Rdetails"> Related Products</h2> </center>
      </div>
      <div>

      </div>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
