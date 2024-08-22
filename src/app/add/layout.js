import React from "react";

const addLayout = ({ children }) => {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 items-start">
      {children}
    </div>
  );
};

export default addLayout;
