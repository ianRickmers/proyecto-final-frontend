export const Header = () => {
    return (
        <header class="header">
            <nav class="header__navbar">
                <a class="header__logo" href="./index.html">
                    <img class="header__img" src="/images/cat_logo.webp"></img>
                    <i class="header__link header__link--red" href="./index.html">Gatos Inc.</i>
                </a>
                <a class="header__link" href="./index.html">Inicio</a>
                <a class="header__link" href="#">Productos</a>
                <a class="header__link" href="#">Servicios</a>
                <a class="header__link" href="#">Contáctanos</a>
            </nav>
        </header>
    )
}