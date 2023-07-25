export const Header = () => {
    return (
        <header class="header">
            <nav class="header__navbar">
                <a class="header__logo" href="./index.html">
                    <img class="header__img" src="/images/cat_logo.webp"></img>
                    <i class="header__link header__link--red" href="./index.html">Cats Inc.</i>
                </a>
                <a class="header__link" href="./index.html">Home</a>
                <a class="header__link" href="#">Products</a>
                <a class="header__link" href="#">Services</a>
                <a class="header__link" href="#">Contact us</a>
            </nav>
        </header>
    )
}