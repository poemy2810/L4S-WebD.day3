$('.slider').slick({
    dots:true,
    slidesToShow:4,
    fade:false,
    slidesToScroll:1,
     responsive:[
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow:3,
                    }
                },
                {
                    breakpoint: 768,
                    settings:{
                        slidesToShow:2,
                    }
                },
                {
                    breakpoint: 500,
                    settings:{
                        slidesToShow:1,
                    }
                },
            ]
});