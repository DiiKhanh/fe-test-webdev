import React from "react";
import brandData from "../../assets/data/brandData";
import { Container, Row, Col } from "reactstrap";
import "../../styles/brand.css";
const Brand = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="brand">
            {brandData.map((item, idx) => (
              <img
                src={item.url}
                alt="brand"
                className="brand-img"
                key={item.url}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
