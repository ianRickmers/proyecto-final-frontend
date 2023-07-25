import { Carousel } from "../Carousel";
import { Pillar } from "../Pillar";

export const Main = (props) => {
    return (
        <main class="main">
            <Carousel />
            <div class="main__principal">
                <h3 class="main__titulo">{props.titulo}</h3>
                <p class="main__parrafo">{props.parrafo}</p>
            </div>
            <div class="main__pilares">
                <Pillar titulo={props.tituloPilar} parrafo={props.parrafoPilar} />
                <button className="boton" onClick={props.get}>
                    Click me for more cat facts
                </button>
            </div>
        </main>
    )
}