import { useState } from "react";

import { DataContext } from '../DataFile/DataProvider';
import { useContext, useEffect,  } from 'react';
import "./ResultBox.css";

const ResultBox = ({ data, resp }) => {

  const [value, setValue] = useState(1);

  const {res } =
    useContext(DataContext);
    let array
   array= res.headers

    
let obj

if(array!=undefined)    {

  obj=Object.entries(array)


}

  const getClassName = (val) => (val === value ? "activebtn" : "");
  
  const { errors
  } = useContext(DataContext);
  const assestImage = "../send.png";
  
 
  let status
  resp.map((ele) => {
    if(ele.statusText == "OK") {
      status="OK"
    }
  });
  
  let stringifydata = JSON.stringify(data);

  
  return (
    <>
      <div>
        <div className="responsetable">
          <div 
                  className={`response-row ${getClassName(1)}`}
                  onClick={() => setValue(1)} >Body</div>
          <div    className={`response-row ${getClassName(2)}`}
                  onClick={() => setValue(2)} >Cookies</div>
          <div    className={`response-row ${getClassName(3)}`}
                  onClick={() => setValue(3)} >Header <span style={{color:'green'}}>({array!=undefined?obj.length:""})</span></div>
          <div    className={`response-row ${getClassName(4)}`}
                  onClick={() => setValue(4)} >Test Result</div>
          <span style={{marginRight:'35%'}}></span>
          <div className="response-status">
            <sapn>
              <i class="fas fa-globe" style={{ fontSize: 12,paddingRight:'2px',marginTop:-17 }}></i>
            </sapn>
            Status:
            <span style={{ fontSize: 12, padding: 2, color: "green" }}>
              {errors?"404 Not Found":status}
            </span>
          </div>
          <div className="response-status">Time </div>
          <div className="response-status">Size</div>
          <div className="response-status" style={{color:'blue'}}>Save Response</div>
        </div>
    
      </div>
      
{resp==""?
<div>
  
        <img
          src={assestImage}
          style={{ width: 300, height: 200,marginLeft:'30%',marginTop:'10%' }}
        />
        </div>:
      <div hidden={value !== 1}>
        {errors?"":
        <textarea className="result-box" value={stringifydata}></textarea>
}
      </div>


      
}
{/* <div  hidden={value !== 2}>
  </div>

{

array!=undefined?

obj.map((ele)=>{
  return (

    <div  hidden={value !== 3} className="table-conatiner">
    <div className="checkbox">
      <input
        style={{ width: 22, height: 19 }}
        type="checkbox"
        checked={true}
      ></input>
    </div>
    <div className="inputbox">
      <input className="input" placeholder="Key" value={ele[0]} ></input>
    </div>
    <div className="inputbox-secand" placeholder="value">
      <input className="input" placeholder="Value"value={ele[1]} ></input>
    </div>
    
    <div className="inputbox-third">
      <input className="input" placeholder="Description"></input>
    </div>
  </div>
)})
:""
} */}

      <div hidden={value !== 2} style={{textAlign:'center',fontSize:15,color:'black',margin:'20%',fontWeight:600}}>
     No Cookies yet
  
      </div>
      <div hidden={value !== 3}>
      {

array!=undefined?

obj.map((ele)=>{
  return (

    <div  hidden={value !== 3} className="table-conatiner">
    <div className="checkbox">
      <div
        style={{ width: 22, height: 19, }}
  
        
      ></div>
    </div>
    <div className="inputbox2">
      <input className="inputBoxHeader" placeholder="Key" value={ele[0]} ></input>
    </div>
    <div className="inputbox-secand1" placeholder="value">
      <input className="inputBoxHeader" placeholder="Value"value={ele[1]} ></input>
    </div>
    
  </div>
)})
:""
} 

      </div>
 <div hidden={value !==4} style={{textAlign:'center',fontSize:15,color:'black',margin:'20%',fontWeight:600}}>
     

   There are no tests for this request

 </div>
    </>
  );
};

export default ResultBox;
