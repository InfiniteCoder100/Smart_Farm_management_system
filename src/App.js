import Dashboard from './Major components/Dashboard';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Major components/Home';
import Livestock from './Major components/Livestock';
import Records from './Major components/Records';
import AddAnimal from './sub components/AddAnimal';
import Header from './sub components/Dashboard/Header';
import FarmProfile from './sub components/FarmProfile';
import Notification from './sub components/Notification';
import Earnings from './sub components/Earnings';
import Farmdetails from './sub components/Farmdetails';
import Assets from './sub components/Assets';
import AddAsset from './sub components/AddAsset';
import AddEarnings from './sub components/Dashboard/AddEarnings';
import LivestockOverview from './sub components/LivestockOverview'
 function App() {
  return (
    <Router>
          <div className='h-screen'>                
                <Header/>
                <Routes>
                  <Route path="/" exact element={<Dashboard/>}/>  
                  <Route path="/earnings"  element={<Earnings/>}/>
                  <Route path="/assets"  element={<Assets/>}/>
                  <Route path="/expenditures"  element={<Assets/>}/>
                  <Route path="/liabilities"  element={<Earnings/>}/>                           
                  <Route path="/farmprofile"  element={<FarmProfile/>}/> 
                  <Route path="/editfarm" element={<Farmdetails/>}/>
                  <Route path="/newasset" element={<AddAsset/>}/>
                  <Route path="/recordearnings" element={<AddEarnings/>}/>
                  <Route path="/livestock" element={<Livestock/>}/>
                  <Route path="/overview" element={<LivestockOverview/>}/>


                </Routes>
                  
          </div>
    </Router>
        
    
    
  )
}
export default App;
