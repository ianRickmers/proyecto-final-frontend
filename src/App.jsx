import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useEffect, useState } from "react";
import "./styles/scss/main.scss"

function App() {
  const [fact, setFact] = useState({});

    const getFactous = async () => {
        try{
            const url = "https://catfact.ninja/fact"
            const response = await fetch(url);
            const data = await response.json();
            setFact(data); 
        }catch(error){
            console.error(error);
        }
        return
    }

    useEffect(() => {
        getFactous();
    }, []);
  return (
    <div className="layout">
      <Header/>
      <Main 
        titulo="Cats Inc." 
        parrafo="Cats are very beautiful animals, they are cute and also have a playful behaviour, they are excelent for a first pet. In the images above you can see some photos of cats." 
        tituloPilar="Cat facts"
        parrafoPilar={fact.fact}
        get={getFactous}
      />
      <Footer/>
    </div>
  );
}

export default App
