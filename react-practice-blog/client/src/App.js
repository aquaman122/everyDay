import TopBar from './components/topbar/TopBar';
import Home from './components/pages/home/Home';
import Single from './components/single/Single';
import Write from './components/write/Write';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/login/register/Register';
import { Routes , Route } from 'react-router-dom';
import { useStateValue } from './stateProvide';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  

  return (
    <>
      <div className="App">
      <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single' element={<Single />} />
          <Route path='/write' element={<Write />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
