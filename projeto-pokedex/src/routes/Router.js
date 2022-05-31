import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import PokeListPage from '../pages/PokeListPage';
import PokedexPage from "../pages/PokedexPage"
import PokeDetailsPage from "../pages/PokeDetailsPage"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PokeListPage />} />
                <Route path={"/pokedex"} element={<PokedexPage />}/>
                <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}