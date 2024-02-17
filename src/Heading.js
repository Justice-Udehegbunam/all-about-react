import React from "react";

const Heading = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

Heading.defaultProps = {
  title: "Default Title",
};

export default Heading;
