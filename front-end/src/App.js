import {Route , Routes} from 'react-router-dom'
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';


function App() {
  return (
    <div className="App h-screen">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/info' element={<InfoPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
