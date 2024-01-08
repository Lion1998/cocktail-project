import { useState, useEffect, useContext } from "react";
import "./Admin.css";
import "bootstrap";
import { Context } from "../../Context";
import {  useNavigate } from "react-router-dom";

export default function Admin() {
  const { state } = useContext(Context);
  const [orders, setOrders] = useState([]);
  const [times, setTimes] = useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate(); 
  const navigateSite = () => {
    navigate("/");
  };
 
  const fetchData = async () => {
    try {
      const times = await fetch("https://localhost:7213/Order/AriivalTime").then((res) => res.json());
      const orders = await fetch("https://localhost:7213/Order/Orders").then((res) => res.json());
      const user = await fetch("https://localhost:7213/Register").then((res) => res.json());
      setTimes(times);
      setOrders(orders);
      setUser(user);
    } catch (error) {
      console.error("Failed to fetch data from the API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (state.user.type !== "Admin") {
    return navigateSite
  }

  const handleDeleteRow = async (id) => {
    try {
      const response = await fetch(`https://localhost:7213/Delete/DeleteOrder/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setOrders((prevData) => prevData.filter((order) => order.id !== id));
    } catch (error) {
      console.error("שגיאה בבקשה למחיקת שורה מה-API:", error);
    }
  };

  return (
    <div className="admin_page">
      <div>
        <h2>טבלת הזמנות</h2>
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Time</th>
              <th>Table</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{user.find((u) => u.id === order.userID).firstName}</td>
                <td>{times.find((u) => u.id === order.expectedArrivalID).time}</td>
                <td>{order.tablesID}</td>
                <td>{order.date.split("T")[0]}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteRow(order.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">
                <button className="button_SendHome" onClick={navigateSite}>
                  Back to Site
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
