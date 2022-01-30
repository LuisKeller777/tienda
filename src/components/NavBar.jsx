import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="https://via.placeholder.com/50" alt="" width="30" height="24" class="d-inline-block align-text-top"/>Mi Tienda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">PC Armadas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Portátiles</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Audio,Video e Imagen</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Componentes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Impresión</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Conectividad</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Accesorios</a>
                    </li>
                </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
        
        </>
    )
}