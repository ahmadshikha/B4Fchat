import { Route, Routes } from 'react-router-dom';
import './output.css';
import HomePage from './pages/HomePage';



function App() {
  return (
    <div className="App h-screen">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
