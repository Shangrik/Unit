
$(document).ready(function () {
    // Вызов карусели
    const carousel = $('#feed-slider').owlCarousel({
        items: 1,
        loop: true
    });

    // Кастомные кнопки вперед и назад для карусели
    $('.slider__arrow--left').click(function () {
        carousel.trigger('prev.owl.carousel', [500]);
    });
    $('.slider__arrow--right').click(function () {
        carousel.trigger('next.owl.carousel', [500]);
    });
});

