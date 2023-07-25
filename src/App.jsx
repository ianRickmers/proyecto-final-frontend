import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="layout">
      <Header/>
      <Main titulo="Los gatos" 
      parrafo="Los gatos son animales muy lindos y tiernos, pero también son muy traviesos y
                juguetones. En las imágenes de
                arriba se muestran algunas fotos de ellos." 
      tituloPilar1="Beneficios de tener un gato"
      parrafoPilar1="Te van a hacer feliz, además que su ronroneo es relajante."
      tituloPilar2="Cuidados"
      parrafoPilar2="Los gatos en general son muy independientes, por lo que su cuidado es
      mínimo."
      tituloPilar3="Cultura"
      parrafoPilar3="Se dice que los gatos tienen 7 vidas, ya que son símbolo de buena suerte."
      />
      <Footer/>
    </div>
  );
}

export default App
