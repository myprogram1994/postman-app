import RightPanelScreen from  "./components/RightPanelScreen.js"
import LeftPanel from './components/LeftPanel.js';
import Header from './components/Header.js';
import {  useState,useContext } from 'react';
import { DataContext } from './DataFile/DataProvider';
import DataProvider from './DataFile/DataProvider';
function App (){
  const [searchUrl, setSearchUrl] =useState([])
  const [resp, setresponse]=useState({})

  
  return (
    <div style={{width:'100%',height:'100%',position:'fixed'}}>
       <DataProvider>
    <Header />
    <LeftPanel searchUrl={searchUrl} setSearchUrl={setSearchUrl}  setresponse={setresponse} resp={resp} />
    <RightPanelScreen searchUrl={searchUrl}  setSearchUrl={setSearchUrl} setresponse={setresponse} resp={resp}/>
    </DataProvider>

    </div> 
    
  );
};

export default App;