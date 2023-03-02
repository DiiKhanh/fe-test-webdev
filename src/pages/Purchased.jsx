import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import PurchasedOrder from "../components/UI/PurchasedOrder";
import { purchasedActions } from "../redux/slices/purchasedSlice";
import "../styles/purchased.css";

// Invoice API json format visualized:
// {
//  [
//   {
//     orderItems: [...];   //item format is same as cart item
//     totalAmount:
//     totalQuantity:
//   },
//   ...more invoices
//  ]
// }

export default function Purchased() {
  const dispatch = useDispatch();
  const { orderList, totalSpent } = useSelector((state) => state.purchased);

  // console.log(orderList);
  useEffect(() => {
    dispatch(purchasedActions.calculateTotalSpent());
  }, []);

  return (
    <Helmet title="Purchased">
      <CommonSection title="Purchased History" />
      <section>
        <Container>
          <Row>
            <ul id="order-list">
              {orderList.map((order) => (
                <PurchasedOrder key={order.order_id} order={order} />
              ))}
            </ul>
          </Row>
          <Row>
            <h2 id="total-spent" className="text-center">Your total spent: $ {totalSpent}</h2>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
