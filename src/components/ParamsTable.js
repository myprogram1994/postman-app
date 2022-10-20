import "./ParamsTable.css";
import { DataContext } from "../DataFile/DataProvider";
import { useContext, useEffect, useState } from "react";

const ParamsTable = () => {
  const [check, setcheck] = useState(false);

  const { key, setkey, value, setvalue, setHeaderData, headerData,res } =
    useContext(DataContext);
    let array
   array= res.headers

    
let obj

if(array!=undefined)    {

  obj=Object.entries(array)


}
  let values = {
    [key]: value,
  };
  
  const handleChange = (e) => {
    setHeaderData([...headerData, values]);

    setcheck(true);
  };
  return (
    <>
  



      <div className="table-conatiner">
        <div className="checkbox">
          <input
            style={{ width: 22, height: 19 }}
            type="checkbox"
            id="params"
            name="params"
            checked={check}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="inputbox">
          <input
            className="input"
            placeholder="Key"
            value={key}
            onChange={(e) => setkey(e.target.value)}
          ></input>
        </div>
        <div className="inputbox-secand">
          <input
            className="input"
            placeholder="Value"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          ></input>
        </div>
        <div className="inputbox-third">
          <input className="input" placeholder="Description"></input>
        </div>
      </div>



  


      <div className="table-conatiner">
        <div className="checkbox">
          <input
            style={{ width: 22, height: 19 }}
            type="checkbox"
            id="params"
            name="params"
            value="params"
          ></input>
        </div>
        <div className="inputbox">
          <input className="input" placeholder="Key"></input>
        </div>
        <div className="inputbox-secand" placeholder="value">
          <input className="input" placeholder="Value" ></input>
        </div>
        
        <div className="inputbox-third">
          <input className="input" placeholder="Description"></input>
        </div>
      </div> 

    </>
  );
};

export default ParamsTable;
