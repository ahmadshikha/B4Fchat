
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';


function App() {
  return (
    <div className="App h-screen">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
      <InfoPage/>
    </div>
  );
}

export default App;
