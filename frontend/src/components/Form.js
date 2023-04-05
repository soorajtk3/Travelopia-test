import React from "react";
import { useState } from "react";
import { addDetails } from "../api/user";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function Form() {
  const [nameValue, setNamevalue] = useState("");
  const [email, setEmail] = useState("");
  const [selectDest, setSelectDest] = useState("India");
  const [budget, setBudget] = useState("");
  const [travellers, setTravellers] = useState("");

  const dataInput = {
    name: nameValue,
    email: email,
    budget: budget,
    travellers: travellers,
    destination: selectDest,
  };
  const submitForm = (event) => {
    event.preventDefault();
    addDetails(
      dataInput,
      (resp) => {
        if (resp.status === 200) {
          Swal.fire("Booking successful").then((result) => {
            if (result.isConfirmed) {
              setNamevalue("");
              setEmail("");
              setSelectDest("");
              setBudget("");
              setTravellers("");
            }
          });
        }
      },
      (err) => console.log({ err })
    );
  };
  return (
    <div>
      <div>
        <button className="listButton">
          <NavLink to="/list">View all users</NavLink>
        </button>
      </div>
      <div>
        <h3>Fill the form</h3>
      </div>
      <div className="formStyle">
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="name" className="label">
              Name :
            </label>

            <input
              className="inputfield"
              name="name"
              type="text"
              value={nameValue}
              onChange={(e) => setNamevalue(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              email :
            </label>

            <input
              className="inputfield"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="label" htmlFor="destination">
              Where do you want to go ? :
            </label>
            <select
              onChange={(e) => setSelectDest(e.target.value)}
              name="destination"
              id="destination"
              className="inputfield"
            >
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
          <div>
            <label htmlFor="travellers" className="label">
              No.of travellers :
            </label>

            <input
              className="inputfield"
              name="travellers"
              type="number"
              min="1"
              max="100"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="budget" className="label">
              Budget :
            </label>

            <input
              className="inputfield placeholder"
              name="budget"
              type="text"
              prefix={"$"}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              autoComplete="off"
            />
            <div className="prefix">$</div>
          </div>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
