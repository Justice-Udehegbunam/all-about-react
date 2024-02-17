import React from "react";

const Footer = (items) => {
  return (
    <footer>
      <p>
        {items.length !== 0
          ? `${items.length} List${items.length === 1 ? " item" : " items"}`
          : "No items"}
      </p>
    </footer>
  );
};

export default Footer;
