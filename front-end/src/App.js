import {Route , Routes} from 'react-router-dom'
import './output.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import WelcomePage from './pages/WelcomePage';
import VerificationPage from './pages/VerificationPage';



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
  

    <div className="App h-screen">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/WelcomePage' element={<WelcomePage/>}/>
          <Route path='/VerificationPage' element={<VerificationPage/>}/>
          <Route path='/InfoPage' element={<InfoPage/>}/>

      </Routes>

    </div>
    </div>
  );
}

export default App;
