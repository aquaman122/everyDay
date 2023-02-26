import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Content from './Content';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/content' element={<Content />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
