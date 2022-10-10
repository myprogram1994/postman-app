import { useState } from "react";

import "./Tabfield.css";

import ParamsTable from "./ParamsTable";
import JsonBox from "./JsonBox"
const Tabfiled = () => {
  const [value, setValue] = useState(3);


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
    <ParamsTable />
      </div>
      <div hidden={value !== 2}>
     
      </div>
      <div hidden={value !== 3}>
      <JsonBox />
      </div>
    </>
  );
};

export default Tabfiled;
