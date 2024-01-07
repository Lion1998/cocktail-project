import { useState, useEffect } from "react";
import "./Admin.css";
import "bootstrap";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [editedBooking, setEditedBooking] = useState(null);
  

  useEffect(() => {
    fetch('https://localhost:7213/Order/Orders')
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.error('שגיאה בבקשה ל-API:', error);
      });
  }, []);

  const handleDeleteRow = (id) => {
    fetch(`https://localhost:7213/Delete/DeleteOrder/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setBookings(prevData => prevData.filter(booking => booking.id !== id));
      })
      .catch(error => {
        console.error('שגיאה בבקשה למחיקת שורה מה-API:', error);
      });
  };

  const handleEditRow = (booking) => {
    setEditedBooking(booking);
  };

  const handleSaveEdit = () => {
    // בצע בקשת PATCH לעדכון הנתונים בשרת
    fetch(`https://localhost:7213/${editedBooking.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedBooking),
    })
      .then(response => response.json())
      .then(updatedBooking => {
        setBookings(prevData =>
          prevData.map(booking =>
            booking.id === updatedBooking.id ? updatedBooking : booking
          )
        );
        setEditedBooking(null);
      })
      .catch(error => {
        console.error('שגיאה בבקשה לעדכון שורה ב-API:', error);
      });
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
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.user}</td>
                <td>{booking.time}</td>
                <td>{booking.table}</td>
                <td>{booking.date}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteRow(booking.id)}>Delete</button>
                  <button className="btn btn-info" onClick={() => handleEditRow(booking)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editedBooking && (
        <div>
          <h2>Edit</h2>
          <form>
            {/* Add form fields for editing */}
            <button className="btn btn-secondary" type="button" onClick={handleSaveEdit}>Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
