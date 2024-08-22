const loading = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <div
          className="spinner-blade"
          style={{ backgroundColor: "#7C00FE" }}
        ></div>
        <div
          className="spinner-blade"
          style={{ backgroundColor: "#F9E400" }}
        ></div>
        <div
          className="spinner-blade"
          style={{ backgroundColor: "#FFAF00" }}
        ></div>
        <div
          className="spinner-blade"
          style={{ backgroundColor: "#F5004F" }}
        ></div>
      </div>
    </div>
  );
};

export default loading;
