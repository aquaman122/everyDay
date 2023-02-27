import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import Content from './content/Content';

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
