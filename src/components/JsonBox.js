import "./JsonBox.css";

const JsonBox = () => {
  const onValueChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div
        style={{ color: "#6b6b6b", padding: 5, marginTop: 6, marginBottom: 10 }}
      >
        JSON
      </div>

      <div>
        <textarea
          className="json-box"
          onChange={(e) => onValueChange(e)}
        ></textarea>
      </div>
    </>
  );
};

export default JsonBox;
