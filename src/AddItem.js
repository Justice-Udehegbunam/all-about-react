import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddItem = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input autoFocus type="text" id="addItem" placeholder="Add Item" />

      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};
