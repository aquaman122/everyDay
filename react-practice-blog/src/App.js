import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
      <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
