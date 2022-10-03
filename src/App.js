import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='App__container'>
      <Router>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
