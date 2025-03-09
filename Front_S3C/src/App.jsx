
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import MatiereHome from './MatiereHome';

import MatiereCreate from './MatiereCreate';
import MatiereUpdate from './MatiereUpdate';

import MatiereRead from './MatiereRead';
import HomePage from './HomePage';
import MyNavbar from './UNavbar';
import EnseignantHome from './EnseignantHome';
import GroupHome from './GroupHome';
// import Login from './Login';
import GestionCharges from './GestionCharges';
import AffectationEnseignants from './AffectationEnseignants'
import PlanificationAutomatique from './PlanificationAutomatique'
// import VisualisationEmploisDuTemps from './VisualisationEmploisDuTemps'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return(
<BrowserRouter>
{/* <MyNavbar /> */}

<Routes>
  <Route path="/" element={<HomePage />} />

<Route path='/MatiereHome' element={<MatiereHome />}> </Route>

<Route path='/MatiereCreate' element={<MatiereCreate />}> </Route>
<Route path='/MatiereUpdate/:id' element={<MatiereUpdate/>}> </Route>

<Route path='/MatiereRead/:id' element={<MatiereRead />}> </Route>
<Route path='/EnseignantHome' element={<EnseignantHome />}> </Route>
<Route path='/GroupHome' element={<GroupHome />}> </Route>
<Route path='/GestionCharges' element={<GestionCharges />}> </Route>
<Route path='/AffectationEnseignants' element={<AffectationEnseignants />}> </Route>
<Route path='/PlanificationAutomatique' element={<PlanificationAutomatique />}> </Route>
{/* <Route path='/VisualisationEmploisDuTemps' element={<VisualisationEmploisDuTemps />}> </Route> */}
{/* <Route path='/Login' element={<Login />}> </Route> */}




</Routes>

</BrowserRouter>

  )
;

}

export default App
