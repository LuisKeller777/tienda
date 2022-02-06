import {Item} from "./Item"

export const ItemList = ({productos}) =>{
    return(
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className="row">
                { productos.map((el) => <Item key={el.id}{...el}/>)}
            </div>
        </div>
    )
}