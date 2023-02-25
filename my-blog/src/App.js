import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
