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
                <Pillar titulo={props.tituloPilar1} parrafo={props.parrafoPilar1} />
                <Pillar titulo={props.tituloPilar2} parrafo={props.parrafoPilar2} />
                <Pillar titulo={props.tituloPilar3} parrafo={props.parrafoPilar3} />
            </div>
        </main>
    )
}