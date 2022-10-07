import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="">
        {" "}
        <select className="select" label="GET">
          <option value={"GET"}>GET</option>
          <option value={"POST"}>POST</option>
          <option value={"PUT"}>PUT</option>
          <option value={"DELETE"}>DELETE</option>
        </select>
      </div>
      <div style={{ flex: 1, backgroundColor: "#f2f2f2", display: "flex" }}>
        <input className="input-box" />
      </div>
      <button
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          width: 100,
          border: "none",
          height: 40,
          marginLeft: 5,
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Form;
