import React, { useState, useEffect } from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";

const initialFormValues = {
  dropdown: [],
  choice: 0,
};

const OrderTechItem = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const submit = (event) => {
    event.preventDefault();
    const order = {
      user_id: 1,
      item_id: formValues.choice,
    };
    axios
      .post("https://used-tech.herokuapp.com/api/orders", order)
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    axios
      .get("https://used-tech.herokuapp.com/api/items")
      .then((res) => {
        setFormValues({ ...formValues, dropdown: res.data });
      })
      .catch();
  }, []);

  return (
    <div>
      <h2>Enter your details to order an item!</h2>
      <form onSubmit={submit}>
        <label>Choose an item:</label>
        <select name="choice" onChange={onChange}>
          {formValues &&
            formValues.dropdown.map((item) => {
              return <option value={item.id}>{item.item}</option>;
            })}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default OrderTechItem;
