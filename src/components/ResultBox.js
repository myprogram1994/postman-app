import "./ResultBox.css";

const ResultBox = ({ data }) => {
  let stringifydata =  JSON.stringify(data);

  return (
    <>
      <div
        style={{ color: "#6b6b6b", padding: 5, marginTop: 6, marginBottom: 10 }}
      >
        Response
      </div>

      <div>
        <textarea className="result-box" value={stringifydata}></textarea>
      </div>
    </>
  );
};

export default ResultBox;
