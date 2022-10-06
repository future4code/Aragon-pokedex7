import { Header } from "../components/Header";

export function ErrorPage () {
    return (
        <main>
            <Header 
                paginaAtual={"paginaDeErro"}
            />
            <h1>Opa, aconteceu um erro!</h1>
        
        </main>
    )
}