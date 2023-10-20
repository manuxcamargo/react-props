import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export default function Home() {
  return (
   <>
   <Header />
   <h2>Home Page</h2>

   <div>
    <h2>Dados Pessoais</h2>

    <div>
      <p>Nome: <span>manu</span></p>
      <p>Idade: <span>16</span></p>
      <p>CPF: <span>473.298.268-98</span></p>
    </div>
   </div>
   <Footer />
   </>
  )
}
