import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokeDetails } from '../pages/PokeDetailsPage';
import { PokedexPage } from '../pages/PokedexPage';
import { PokeListPage } from '../pages/PokeListPage';
import { ErrorPage } from '../pages/ErrorPage';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PokeListPage />} />
                <Route path={"/pokedex"} element={<PokedexPage />}
                />
                <Route path={"/pokemon/:pokeName/details"} element={<PokeDetails />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}