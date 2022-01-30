import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from "./components/container/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

function App() {
    return ( 
        <>
        <NavBar/>
        <ItemListContainer greeting={"Hello World!"}/>
        </>
    );
}

export default App;