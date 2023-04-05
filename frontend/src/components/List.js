import React, { useEffect, useState } from "react";
import { getUserdata } from "../api/user";
import { NavLink } from "react-router-dom";

function List() {
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    getUserdata((data) => setUserdata(data));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#cfead9",
        width: "100vw",
      }}
    >
      <div>
        <h3 style={{ paddingTop: "10px" }}>User List</h3>
      </div>
      <div>
        <button className="listButton">
          <NavLink to="/">Back to Home</NavLink>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <table className="table" style={{}}>
          <thead style={{ color: "#11114e" }}>
            <tr style={{ top: 0 }}>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Travellers</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody className="tableBody">
            {userData?.getUser?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.destination}</td>
                <td>{user.travellers}</td>
                <td>
                  {"$"}
                  {user.budget}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
