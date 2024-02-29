"use client";
import { useState } from "react";

const editEntry = async (formData) => {
  const res = await fetch(
    `http://localhost:3000/api/hourEntries/${formData.id}`,
    {
      method: "PUT",
      body: JSON.stringify(formData),
    }
  );
  if (res.ok) {
    // Reload the page if the request is successful
    window.location.href = "/"; // Redirect to the home page
    return true;
  } else {
    // Return false if the request fails
    window.alert("Error updating hours");
  }
};
const deleteEntry = async (id) => {
  const res = await fetch(`http://localhost:3000/api/hourEntries/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    window.location.href = "/"; // Redirect to the home page
    return true;
  } else {
    window.alert("Error deleting entry");
    return false;
  }
};

export default function Edit({ data }) {
  const [formData, setFormData] = useState(data); // Set the initial form data to the data passed as a prop

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericValue = parseInt(value); // Convert the value to a number because the original value was coming as a string
    setFormData({
      ...formData,
      [name]: numericValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmEdit = window.confirm(
      "Are you sure you want to change the entry?"
    );

    if (confirmEdit) {
      console.log("Form data:", formData);
      const update = await editEntry(formData);

      update ? alert("Hours updated") : alert("Error updating hours");
    }
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );

    if (confirmDelete) {
      const deleted = await deleteEntry(formData.id);

      deleted ? alert("Entry deleted") : alert("Error deleting entry");
    } else {
      null;
    }
  };

  return (
    <div className="flex justify-center max-w-50">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input type="text" name="project" value={formData.id} readOnly />
        </div>
        <div>
          <label>Time spent: </label>
          <input
            type="number"
            name="timeSpent"
            value={formData.timeSpent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Issue: </label>
          <input
            type="text"
            name="issueUrl"
            value={formData.issueUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full p-4 justify-between">
          <button
            className=" bg-red-500 p-3 rounded-xl "
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button className=" bg-green-500 p-3 rounded-xl" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
