import React, { useEffect, useState } from "react";
import { getUserdata } from "../api/user";

function List() {
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    getUserdata((data) => setUserdata(data));
  }, []);
  console.log(userData);
  return (
    <div
      style={{ backgroundColor: "#E1F8DC", width: "100vw", height: "100vh" }}
    >
      <div>
        <h3>User List</h3>
      </div>
      <div style={{ marginLeft: "30%" }}>
        <table>
          <tr style={{ marginRight: "30px" }}>
            <th>No.</th>
            <th style={{ marginRight: "-5px" }}>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Travellers</th>
            <th>Budget</th>
          </tr>

          <tbody>
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
