import { useEffect, useState } from "react"
import {ItemList} from "./ItemList"
import { pedirDatos } from "./pedirDatos"
/*
export const ItemListContainer = ({greeting}) => {
    return(
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr />
        </section>
    )
}*/

export const ItemListContainer =() =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res)=>{
                setProductos(res)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])

    return(
        <>
        <div>
            {
                loading ? <h3>Cargando...</h3> : <ItemList productos={productos}/>
            }
        </div>
        </>
    )
}