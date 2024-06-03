import {Route , Routes} from 'react-router-dom'
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import WelcomePage from './pages/WelcomePage';



function App() {
  return (
// <<<<<<< HEAD
    <div className="">
{/*      
     <div className='group/yazan'>
      <h2 className=' bg-slate-500'>hello world</h2>

      <h3 className='group-hover/yazan:text-red-600'>wellcome to ghaith</h3>
     </div>
     <h1>wellcome</h1> */}
     
     {/* <HomePage/> */}
     <InfoPage/>

    <div className="App h-screen">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/wellcome' element={<WelcomePage/>}/>
      </Routes>
{/* >>>>>>> bc877cc2ee2ee89fa7e9cc242eddf4d372505882 */}
    </div>
    </div>
  );
}

export default App;
