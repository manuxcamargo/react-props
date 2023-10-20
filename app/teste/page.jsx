import { Header } from "../components/header/Header";
import { Navteste } from "../components/navteste/NavTeste";


export default function Teste() {
    return (
        <div>
            <Header />
            <h3>Página Teste</h3>

            <div>
      <Navteste dado={"nome:"} texto={"manu"}/>
      <Navteste dado={"idade:"} texto={"16"}/>
      <Navteste dado={"CPF:"} texto={"473-298268-98"}/>
    </div>
        </div>
    )
}