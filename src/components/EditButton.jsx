// THIS EDIT BUTTON ISN'T WORKING OK YET, SOMETIMES IT UPDATES TO SPENTTIME VALUES FROM THE FORM.


"use client";
import { useState } from "react";

const editHours = async (hours, id) => {
  const values = {
    id: id,
    hours: hours,
  };
  const res = await fetch("http://localhost:3000/api/hourEntries", {
    method: "PUT",
    body: JSON.stringify(values),
  });
  if (res.ok) {
    // Reload the page if the request is successful
    window.location.reload();
    return true;
  } else {
    // Return false if the request fails
    window.alert("Error updating hours");
  }
};
export default function EditButton({ hoursSpent, id }) {
  const [hours, setHours] = useState(hoursSpent);

  const handleChange = (e) => {
    // obtain the value from the input to update the state
    const value = parseInt(e.target.value, 10); // using parseInt to convert the string to a number
  
    // check if the value is a number before setting the state
    if (!isNaN(value)) {
      setHours(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmEdit = window.confirm(
      "Are you sure you want to change the hours spent?"
    );

    if (confirmEdit) {
      const update = await editHours(hours, id);

      update ? alert("Hours updated") : alert("Error updating hours");
    }
  };
  return (
    <div className="z-10 flex justify-center align-middle">
      <input type="number" placeholder={hoursSpent} onChange={handleChange} />
      <button onClick={handleSubmit}>Done</button>
    </div>
  );
}
