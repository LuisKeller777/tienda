import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

function App() {
    return ( 
        <>
        <NavBar/>
        <ItemListContainer/>
        </>
    );
}

export default App;