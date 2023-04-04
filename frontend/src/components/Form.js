import React from "react";
import { useState } from "react";
import { addDetails } from "../api/user";
import Swal from "sweetalert2";
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
    // addDetails(dataInput);
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
        <h3>Fill the form</h3>
      </div>
      <div className="formStyle">
        <form onSubmit={submitForm}>
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
          {/* <br /> */}
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
          {/* <br /> */}
          <label className="label" htmlFor="destination">
            Where do you want to go ? :
          </label>
          <select
            onChange={(e) => setSelectDest(e.target.value)}
            name="destination"
            id="country"
            className="inputfield"
          >
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </select>
          <br />
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
          <label htmlFor="budget" className="label">
            Budget :
          </label>

          <input
            className="inputfield"
            name="budget"
            type="text"
            prefix={"$"}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            autoComplete="off"
          />
          {/* <br /> */}

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;