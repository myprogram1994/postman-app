import Form from "./Form";
import Tabfiled from "./Tabfield"
import ResultBox from "./ResultBox"
import { DataContext } from '../DataFile/DataProvider';
import { useContext, useState } from 'react';
import { getData } from '../service/api';

const RightPanelScreen = () => {
   
  
  const [apiResponse, setApiResponse] = useState({})

  const { data, datajson} = useContext(DataContext);
  

  const onSendClick = async () => {
      

      let response = await getData(data, datajson);
      console.log(response);
      if (response === 'error') {

          return;
      }
      else{
       
      setApiResponse(response.data)
      }
  }

  return (
    <>
      <div
        style={{
          width: "65%",
          marginLeft: "31%",
          flexWrap:'nowrap'
        }}
      >
        <Form onSendClick={onSendClick} />
        <Tabfiled/>
        <ResultBox data={apiResponse}/>

      </div>
    </>
  );
};

export default RightPanelScreen;
