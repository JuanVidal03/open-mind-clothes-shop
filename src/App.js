import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App__container'>
      <NavBar/>
      <ItemListContainer greeting={'Hola CoderHouse!'}/>
    </div>
  );
}

export default App;
