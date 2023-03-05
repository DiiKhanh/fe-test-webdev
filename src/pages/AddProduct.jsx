import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../styles/add-product.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../styles/cart.css";
import { addProduct } from "../redux/slices/ProductSlice";
const AddProduct = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth?.currentUser);
  const dispatch = useDispatch();
  // fake data. wait BE
  const cartItems = [
    {
      img: "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
      name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
      price: 12000,
    },
  ];
  const addProduct = async () => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(false);
      const info = {
        data: {
          name: enterTitle,
          des: enterDesc,
          price: enterPrice,
          catagory: enterCategory,
          grid_img: enterProductImg,
          main_img: enterProductImg,
        },
        token: user.accessToken,
      };

      const res = await dispatch(addProduct(info)).unwrap();

      toast.success("Added product successfully !");
    } catch (error) {
      setLoading(false);
      toast.error("product not added!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <h4 className="mb-5">Add Product</h4>
            <Form className="add__product" onSubmit={addProduct}>
              <FormGroup className="form__group">
                <span>Product Title</span>
                <input
                  type="text"
                  placeholder=""
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description........."
                  value={enterDesc}
                  onChange={(e) => setEnterDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <div
                className="d-flex align-items-center justify-content-between
              gap-5
              "
              >
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$100."
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                    required
                  >
                    <option value="basketball">Basketball</option>
                    <option value="running">Running</option>
                    <option value="lifestyle">Lifestyle</option>
                  </select>
                </FormGroup>
              </div>
              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input
                    type="text"
                    onChange={(e) => setEnterProductImg(e.target.value)}
                    required
                  />
                </FormGroup>
              </div>
              <button className="buy__btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
          <Col lg="6">
            {cartItems.length === 0 ? (
              <h2 className="fs-4 text-center">No Item Added to the cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, idx) => (
                    <Tr key={idx} item={item} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Tr = ({ item }) => {
  return (
    <tr>
      <td>
        <img src={item.img} alt="" />
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>

      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default AddProduct;
