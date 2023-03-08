import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopBar from './component/topbar/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<TopBar />} />
      </Routes>
    </>
  );
}

export default App;
