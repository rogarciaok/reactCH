import './App.css';
import NavBar from "./components/navbar";
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx';
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";



const mensaje = "Consecionaria Guido Guidi";
function App() {
  return (
<div name="background" class="p-3 mb-2 bg-dark text-white">
    <div className="App">
 <NavBar/>


     <ItemListContainer name={mensaje} />
     <ItemDetailContainer/>


      <header className="App-header">
      </header>
          </div>
      </div>
  );
}



export default App;