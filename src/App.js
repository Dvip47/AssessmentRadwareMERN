import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './component/ItemList';
import ItemPage from './component/ItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ItemList/>} />
        <Route path='/item/:id' element={<ItemPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
