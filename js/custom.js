$(function(){
    // Slider Slick
    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
    // Slider Slick

    // Service Slick 
    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          
        ],
      });
    // Service Slick 

    // MixitUp Slick
    var containerEl = document.querySelector('.filter_plug');

    var mixer = mixitup(containerEl);
    // MixitUp Slick

    // Video
    new VenoBox({
        selector: '.my-video-links',
    });
    // Video

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Counter Up

    // Blog Slick 
    $('.blog_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        ],
      });
    // Blog Slick 

    // Client Slick 
    $('.client_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ],
      });
    // Client Slick 

    //  Sticky Header  
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      
      if(scrolling > 200){
          $('.navbar').addClass('sticky_header');
      }
      else {
          $('.navbar').removeClass('sticky_header');
      }
      });  
      //  Sticky Header


    //==== Back-to-top button
    $(window).on('scroll', function(event) {
      if($(this).scrollTop() > 600){
          $('.back-to-top').fadeIn(200)
      } else{
          $('.back-to-top').fadeOut(200)
      }
      });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });
});