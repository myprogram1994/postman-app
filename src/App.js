import RightPanelScreen from  "./components/RightPanelScreen.js"
import LeftPanel from './components/LeftPanel.js';
import Header from './components/Header.js';

import DataProvider from './DataFile/DataProvider';
function App (){

  return (
    <div style={{width:'100%',height:'100%',position:'fixed'}}>
       <DataProvider>
    <Header />
    <LeftPanel/>
    <RightPanelScreen/>
    </DataProvider>

    </div> 
    
  );
};

export default App;