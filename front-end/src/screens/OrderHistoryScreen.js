import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  return (
    <div>
      <h1>Historique de commandes</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payée</th>
              <th>Livrée</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : "Non"}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "Non"}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
