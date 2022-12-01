const settings = {
    focusOnSelect: true,
    swipeToSlide: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export default settings;
