import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";



const mensaje = "Consecionaria Guido Guidi";
function App() {
  return (
<div name="background" class="p-3 mb-2 bg-dark text-white">
    <div className="App">
 <NavBar/>


     <ItemListContainer name={mensaje} />

      <header className="App-header">
      </header>
          </div>
      </div>
  );
}



export default App;