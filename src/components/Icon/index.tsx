import React from "react";
import "remixicon/fonts/remixicon.css";

const Icon = ({ name, size }: any) => {
  return (
    <div style={{ fontSize: size }}>
      <i className={name} />
    </div>
  );
};

export default Icon;
