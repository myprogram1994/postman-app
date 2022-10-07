import RightPanelScreen from  "./components/RightPanelScreen.js"
import LeftPanel from './components/LeftPanel.js';
import Header from './components/Header.js';
function App (){

  return (
    <div>
    <Header />
    <LeftPanel/>
    <RightPanelScreen/>
    </div> 
    
  );
};

export default App;