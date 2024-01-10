/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import "./Admin.css";
import "bootstrap";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { state } = useContext(Context);
  const [allOrders, setAllOrders] = useState([]);
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const [times, setTimes] = useState([]);
  const [tables, setTables] = useState([]);
  const [user, setUser] = useState([]);
  const [searchTermDate, setSearchTermDate] = useState("");
  const [searchTermUser, setSearchTermUser] = useState("");
  const [searchTermTime, setSearchTermTime] = useState("");
  const [searchTermTable, setSearchTermTable] = useState("");
  const [orderToEdit, setOrderToEdit] = useState({});
  const [deleteError, setDeleteError] = useState(null);
  const navigate = useNavigate();

  const navigateSite = () => {
    navigate("/");
  };
  const updateOrder = async (order) => {
    try {
      const response = await fetch(
        `https://localhost:7213/Order/${order.id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(order),
        }
      )
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      await fetchUpdatedData();
      setOrderToEdit({})
    } catch (error) {
      console.error("Failed to update order:", error);
      setDeleteError("Failed to update order. Please try again.");
    }
  };
  const updateOrderToEdit = (e,order)=> { 
    setAllOrders(allOrders.map(o => o.id === order.id ? {...o, [e.target.name]: e.target.value} : o))
    
}
  const fetchData = async () => {
    try {
      const timesData = await fetch(
        "https://localhost:7213/Order/AriivalTime"
      ).then((res) => res.json());
      const ordersData = await fetch(
        "https://localhost:7213/Order/Orders"
      ).then((res) => res.json());
      const userData = await fetch("https://localhost:7213/Register").then(
        (res) => res.json()
      );
      const tablesData = await fetch("https://localhost:7213/Table").then(
        (res) => res.json()
      );
      setTimes(timesData);
      setTables(tablesData);
      setAllOrders(ordersData);
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch data from the API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [
    searchTermDate,
    searchTermUser,
    searchTermTime,
    searchTermTable,
    allOrders,
  ]);

  const filterOrders = () => {
    const filteredOrders = allOrders.filter(
      (order) =>
        order.date.toLowerCase().includes(searchTermDate.toLowerCase()) &&
        user
          .find((u) => u.id === order.userID)
          .firstName.toLowerCase()
          .includes(searchTermUser.toLowerCase()) &&
        times
          .find((t) => t.id == order.expectedArrivalID)
          .time.toLowerCase()
          .includes(searchTermTime.toLowerCase()) &&
        order.tablesID
          .toString()
          .toLowerCase()
          .includes(searchTermTable.toLowerCase())
    );
    setDisplayedOrders(filteredOrders);
  };

  if (state.user.type !== "Admin") {
    return navigateSite;
  }

  const fetchUpdatedData = async () => {
    try {
      const ordersData = await fetch(
        "https://localhost:7213/Order/Orders"
      ).then((res) => res.json());
      setAllOrders(ordersData);
      setDeleteError(null);
    } catch (error) {
      console.error("Failed to fetch updated data from the API:", error);
      setDeleteError("Failed to fetch updated data from the API.");
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7213/Delete/DeleteOrder/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await fetchUpdatedData();
    } catch (error) {
      console.error("שגיאה בבקשה למחיקת שורה מה-API:", error);
      setDeleteError("Failed to delete order. Please try again.");
    }
  };

  return (
    <div className="admin_page">
      <div>
        <h1>טבלת הזמנות</h1>
        {deleteError && <div className="error-message">{deleteError}</div>}
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>
                <input
                  type="text"
                  placeholder="חיפוש לפי משתמש..."
                  onChange={(e) => setSearchTermUser(e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="חיפוש לפי זמן..."
                  onChange={(e) => setSearchTermTime(e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="חיפוש לפי שולחן..."
                  onChange={(e) => setSearchTermTable(e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="חיפוש לפי תאריך..."
                  onChange={(e) => setSearchTermDate(e.target.value)}
                />
              </th>
              <th></th>
              <th></th>
            </tr>
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
            {displayedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{user.find((u) => u.id === order.userID).firstName}</td>
                <td>
                  <select onChange={(e) => updateOrderToEdit (e,order)} disabled={order.id !== orderToEdit.id} name= "expectedArrivalID" value={order.expectedArrivalID}>{times.map((t) => <option key={t.id} value={t.id}>{t.time}</option>)}</select>
                  
                </td>
                <td><select onChange={(e) => updateOrderToEdit (e,order)} disabled={order.id !== orderToEdit.id} name= "tablesID" value={order.tablesID}>{tables.map((t) => <option key={t.id} value={t.id}>{t.id}</option>)}</select></td>
                <td><input type="date" value={order.date.split("T")[0]} onChange={(e) => updateOrderToEdit (e,order)} disabled={order.id !== orderToEdit.id} name= "date" /></td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteRow(order.id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="btn btn-light"
                    onClick={() => order.id === orderToEdit.id ? updateOrder(order): setOrderToEdit(order)}>
                     {order.id === orderToEdit.id ? "Save" : "Edit"} 
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
