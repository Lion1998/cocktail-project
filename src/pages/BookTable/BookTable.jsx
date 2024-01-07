import React, { useState, useEffect } from "react";
import "./BookTable.css";
import { useNavigate } from "react-router-dom";

export default function BookTable() {
  const [seats, setSeats] = useState([]);
  const [areas, setAreas] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const seatsResponse = await fetch("https://localhost:7213/Seats");
      const areasResponse = await fetch("https://localhost:7213/Areas");
      const timesResponse = await fetch("https://localhost:7213/Times");

      const seatsResult = await seatsResponse.json();
      const areasResult = await areasResponse.json();
      const timesResult = await timesResponse.json();

      setSeats(seatsResult);
      setAreas(areasResult);
      setTimes(timesResult);
    } catch (error) {
      console.error("Failed to fetch data from the API:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform action with selected data
    console.log({
      selectedSeat,
      selectedArea,
      selectedTime,
      selectedDate,
    });
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
        <h1>Reservation</h1>
        <div className="auth_form_table_order">
          <select
            className="form-select"
            onChange={(e) => setSelectedSeat(e.target.value)}
            value={selectedSeat}
            required
          >
            <option value="" disabled>
              Select Seats
            </option>
            {seats.map((seat) => (
              <option key={seat.id} value={seat.id}>
                {seat.name}
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
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
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
                {time.name}
              </option>
            ))}
          </select>

          <input
            className="form-select"
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
            required
          />

          <button type="submit">Order</button>
        </div>
      </form>
    </div>
  );
}
