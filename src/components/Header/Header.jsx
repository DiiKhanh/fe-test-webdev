import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../../redux/slices/authSlice";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "purchased",
    display: "Purchased",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // console.log(currentUser);
  // wait be return data user
  // const currentUser = {
  //   id: 1,
  //   roles: "user",
  // };

  const { totalQuantity } = useSelector((state) => state.cart);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc());
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfile = () => {
    profileRef.current.classList.toggle("show__profile");
  };

  const handleVerify = () => {
    if (currentUser?.roles[0] === "role_admin") {
      navigate("/add-product");
    } else {
      toast.error("401_UNAUTHORIZED");
    }
  };

  const handleLogout = async () => {
    await dispatch(logOut());
    toast.success("Logout success!");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="logoweb" />
              <div>
                <h1>Shop Sneaker</h1>
              </div>
            </div>
            {/* navigation */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* icons */}
            <div className="nav__icons">
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? userIcon : userIcon}
                  alt="avt-user"
                  onClick={toggleProfile}
                />
                <div
                  className="profile__actions"
                  ref={profileRef}
                  onClick={toggleProfile}
                >
                  {currentUser ? (
                    <div className="login__success">
                      <span onClick={handleLogout}>Logout</span>
                      <span to="/add-product" onClick={handleVerify}>
                        Add Product
                      </span>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-between flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu" onClick={menuToggle}>
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
            {/* menu icon */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
