import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {

  const test = {
    "Imagen": "/productos-img/chaqueta-niño.jpg",
        "Nombre": "Chaqueta Para Niño",
        "Descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eligendi aliquam dignissimos quasi cum eveniet error quis minima sit quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "Precio": 100
  }
  
  return (
    <div className='App__container'>
          <NavBar/>
      <Router>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
            <Route path='/category/:id' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
