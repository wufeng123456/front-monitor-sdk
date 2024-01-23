import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <div className="App">
      <div>
        <Link to={'/page1'}>page1</Link>
         ｜
        <Link to={'/page2'}>page2</Link>
         ｜
        <Link to={'/page3'}>page3</Link>
         |
        <Link to={'/page4'}>page4</Link>
      </div>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
