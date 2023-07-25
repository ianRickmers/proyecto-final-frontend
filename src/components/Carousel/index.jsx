export const Carousel = () => {
    return (
        <div id="carouselCats" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCats" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCats" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCats" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-item active">
                    <img class="carousel__img" src="/images/cat_img1.jpg" alt="gato1"/>
                </div>

                <div class="carousel-item">
                    <img class="carousel__img" src="/images/cat_img2.webp" alt="gato2"/>
                </div>
                <div class="carousel-item">
                    <img class="carousel__img" src="/images/cat_img3.webp" alt="gato3"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselCats" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselCats" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    )
}