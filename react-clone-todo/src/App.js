import './App.css';
import Login from './component/Login';
import {Route, Routes} from 'react-router-dom';
import Register from './component/Register';
import Main from './component/Main';

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
