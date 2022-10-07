const CollectionTmage = () => {
  const assestImage = "../collection.png";

  return (
    <>
      <div>
        <img
          src={assestImage}
          style={{ width: 200, height: 150, padding: 50 }}
        />
        <div
          style={{
            color: "#6b6b6b",
            padding: 5,
            marginTop: -40,
            marginBottom: 20,
            textAlign: "center",
            width: 292,
            fontWeight: 500,
          }}
        >
          Create a collection for your requests
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#6b6b6b",
            padding: 5,
            marginTop: -24,
            marginBottom: 20,
            width: 292,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          A collection lets you group related requests and easily set common
          authorization, tests, scripts, and variables for all requests in it.
        </div>
      </div>
    </>
  );
};

export default CollectionTmage;
