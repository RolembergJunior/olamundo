import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Componentes/Menu"
import PaginaPadrao from "./Componentes/PáginaPadrão"
import Rodape from "./Componentes/Rodapé"
import Inicio from "./Paginas/Início/indes"
import NotFound from "./Paginas/NotFound"
import Post from "./Paginas/Posters"
import SobreMim from "./Paginas/Sobre Mim"
import ScrollToTop from "./Componentes/Scroll"


function AppRoutes () {
    return (
        <BrowserRouter>

            <ScrollToTop/>

            <Menu/>

            <Routes>

                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Inicio/>} />
                    <Route path="sobremim" element={<SobreMim/>} />
                </Route>

                <Route path="posts/:id" element={<Post/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>

            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoutes