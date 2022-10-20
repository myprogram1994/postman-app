import Form from "./Form";
import Tabfiled from "./Tabfield"
import ResultBox from "./ResultBox"
import { DataContext } from '../DataFile/DataProvider';
import { useContext, useEffect,  } from 'react';
import { getData } from '../service/api';
import {  useState } from 'react';
const RightPanelScreen = ({searchUrl, setSearchUrl,Urlchange,seturlchange,setresponse,resp,change}) => {
   
  
  const [apiResponse, setApiResponse] = useState({})
  const [isshow,setShow]=useState(false)
  const { data, datajson,errors,setError, headerData,setresponseheaders,res,Msgerror, setErrorMsg
              } = useContext(DataContext);

let url={}
const assesterrorImage="../error.jpg"



  const onSendClick = async () => {
    
    
    if(!data.url) {
      setErrorMsg('Request URL is empty!');
      setShow(true)
      return false
  
      
  }
  else{
    setShow(false)
  }
  if(!datajson) {
  
    
    
}


      // let urls=JSON.parse(localStorage.getItem('urls') || "[]")
      let response = await getData(data, datajson,headerData);


      // let urlvalue={url:response.config.url}
      
      // urls.push(urlvalue)
      // localStorage.setItem('urls',JSON.stringify(urls))
      // setSearchUrl([...searchUrl,urls])
      // setresponse(response.headers)
      setSearchUrl([...searchUrl,response])
      
      // response.headers[key2]=value2
//  let keyheader=data.headerkey=[key2]
//  let valueheader=data.headerkey=[value2]
//  setData({ ...data, headerkey: keyheader });
//  setData({...data,headervalue:valueheader})
// console.log(keyheader)
// console.log(valueheader)
// setHeaderData([key2]:value2)
// console.log("headerData",headerData)

      if (response === 'error') {
setError(true)
        
      }
      else{
       
      setApiResponse(response.data)
      setresponseheaders(response)
setError(false)
      }
  }


  
  return (
    <>
      <div
        style={{
          width: "70%",
          marginLeft: "27%",
        
        }}
      >
        <Form onSendClick={onSendClick}  Urlchange={Urlchange} seturlchange={seturlchange} change={change} 
         />
      
        <Tabfiled resp={searchUrl}/>
       { isshow? <div
        style={{
          boxShadow: '0 0 20px #0000004f',
          width:'250px',
          color:"red",
          textAlign:"center",
          bottom: '20px',
          padding:5,
          right: '80px',
          position:'absolute'
        }}
      >{Msgerror}</div>:""}:
      
       <ResultBox data={apiResponse} resp={searchUrl}/>
    

      </div>
    </>
  );
};

export default RightPanelScreen;


