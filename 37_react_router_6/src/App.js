import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cat from './pages/Cat';
import Dog from './pages/Dog';
import ToDo from './pages/ToDo';
import CatAnton from './pages/CatAnton';
import CatName from './pages/CatName';
import ToDoItem from './pages/ToDoItem';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<ToDo />} />
          <Route path='/todo/:id' element={<ToDoItem />} />
          <Route path='/cat' element={<Cat />} />
          <Route path='/cat/anton' element={<CatAnton />} />
          <Route path='/cat/:catName' element={<CatName />} />
          <Route path='/dog' element={<Dog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
