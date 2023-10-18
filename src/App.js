import './App.css';

// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Settings from './pages/Settings';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className='app'>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} > </Route>
          <Route path='/about' exact element={<About />} > </Route>
          <Route path='/settings' exact element={<Settings />} > </Route>
        </Routes>
      </ BrowserRouter> */}

        <Sidebar />
        <Dashboard />
      
      </div>
      
     
    
  );
}

export default App;
