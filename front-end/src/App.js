import {Route , Routes} from 'react-router-dom'
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import WelcomePage from './pages/WelcomePage';
import VerificationPage from './pages/VerificationPage';
import Slider from './Components/Slider';


function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/info' element={<InfoPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/welcome' element={<WelcomePage/>}/>
          <Route path='/verify' element={<VerificationPage/>}/>
          <Route path='/slider' element={<Slider/>}/>
      </Routes>

    </div>
  );
}

export default App;
