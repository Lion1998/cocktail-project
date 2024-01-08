// BookTable.jsx

import React, { useState, useEffect, useContext } from "react";
import "./BookTable.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";

export default function BookTable() {
  const { state } = useContext(Context);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedNumOfSeats, setSelectedNumOfSeats] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredTables = tables.filter(
    (table) =>
      (selectedArea === "" || table.area === selectedArea) &&
      (selectedNumOfSeats === "" || table.seats >= selectedNumOfSeats) &&
      (selectedTime === "" ||
        selectedDate === "" ||
        !orders.some(
          (order) =>
            order.tablesID === table.id &&
            order.date.split("T")[0] === selectedDate &&
            order.expectedArrivalID === selectedTime
        ))
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const tables = await fetch("https://localhost:7213/Table").then((res) =>
        res.json()
      );
      const times = await fetch(
        "https://localhost:7213/Order/AriivalTime"
      ).then((res) => res.json());
      const orders = await fetch("https://localhost:7213/Order/Orders").then(
        (res) => res.json()
      );

      setTables(tables);
      setTimes(times);
      setOrders(orders);
    } catch (error) {
      console.error("Failed to fetch data from the API:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("https://localhost:7213/Order", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tablesID: filteredTables[0].id,
        expectedArrivalID: selectedTime,
        userID: state.user.id,
        date: selectedDate,
      }),
    });
    await fetchData();
    setSubmitted(true);
  };
  const navigateSite = () => {
    navigate("/");
  };

  return (
    <div className="bookTable">
      <button className="button_SendHome" onClick={navigateSite}>
        Back to Site
      </button>
      <form className="auth_form_container_table_order" onSubmit={handleSubmit}>
        {submitted ? (
          <>
            <h1>Thank you for ordering</h1>
            <div>
              You selected seat {selectedArea} with {selectedNumOfSeats} seats,
              Date: {selectedDate}
            </div>
          </>
        ) : (
          <>
            <h1>Reservation</h1>
            <div className="auth_form_table_order">
              <select
                className="form-select"
                onChange={(e) => setSelectedNumOfSeats(e.target.value)}
                value={selectedNumOfSeats}
                required
              >
                <option value="" disabled>
                  Select Number of Seats
                </option>
                {[...Array(4).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                className="form-select"
                onChange={(e) => setSelectedArea(e.target.value)}
                value={selectedArea}
                required
              >
                <option value="" disabled>
                  Select Area
                </option>
                {[...new Set(tables.map((table) => table.area))].map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <select
                className="form-select"
                onChange={(e) => setSelectedTime(e.target.value)}
                value={selectedTime}
                required
              >
                <option value="" disabled>
                  Select Time
                </option>
                {times.map((time) => (
                  <option key={time.id} value={time.id}>
                    {time.time}
                  </option>
                ))}
              </select>

              <input
                className="form-select"
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                required
              />

              <button type="submit" className="submit-button">
                Order
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
