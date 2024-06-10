import {Route , Routes} from 'react-router-dom'
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import WelcomePage from './pages/WelcomePage';
import VerificationPage from './pages/VerificationPage';
import Slider from './Components/Slider';
import { useSelector } from 'react-redux';



function App() {
  const token = useSelector(state => state.users.token)
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/info' element={<InfoPage/>}/>
          <Route path='/' element={token ? <HomePage/> : <WelcomePage/>}/>
          <Route path='/slider' element={token ? <Slider/> :<WelcomePage/>}/>
      </Routes>

    </div>
  );
}

export default App;
