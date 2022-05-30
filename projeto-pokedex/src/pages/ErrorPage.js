import { useNavigate } from "react-router-dom"
import { goToPokeListPage } from "../routes/coordinator"

export function ErrorPage () {
    const navigate = useNavigate()
    return (
        <main>

            <h1>Pagina de Erro</h1>
            <button onClick={()=> goToPokeListPage(navigate)}>Ir para pagina inicial</button>
        
        </main>
    )
}