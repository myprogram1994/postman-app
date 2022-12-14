import { useState } from "react";

import "./Tabfield.css";

import ParamsTable from "./ParamsTable";
import JsonBox from "./JsonBox"
const Tabfiled = ({resp,key2,setkey2,value2,setValue2}) => {
  const [value, setValue] = useState(2);


  const getClassName = (val) => (val === value ? "activebtn" : "");
  return (
    <>
      <div className="tab-main-conatiner">
        <div className={`box ${getClassName(1)}`} onClick={() => setValue(1)}>
          Params
        </div>
        <div className={`box ${getClassName(2)}`} onClick={() => setValue(2)}>
          Headers
        </div>
        <div className={`line ${getClassName(3)}`} onClick={() => setValue(3)}>
          Body
        </div>
      </div>
      <div hidden={value !== 1}>
    <ParamsTable resp={resp} key2={key2} setkey2={setkey2} value2={value2} setValue2={setValue2}/>
      </div>
      <div hidden={value !== 2}>
     
    <ParamsTable />
      </div>
      <div hidden={value !== 3}>
      <JsonBox />
      </div>
    </>
  );
};

export default Tabfiled;
