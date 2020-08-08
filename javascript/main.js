$(function() {
    new WOW().init();
    $(window).scroll(function() {
        var bodyHeight = $('html,body').scrollTop()
        // Sticky header, goTopbtn
        $(function sticky() {
            if(bodyHeight >= 250) {
            $('.header__menu').addClass('sticky')
            $('.go-to-top').addClass('go-to-top-appear')
        } else {
            $('.header__menu').removeClass('sticky')
            $('.go-to-top').removeClass('go-to-top-appear')
        }
        })
    })
    // Go to top btn
    $('.go-to-top').click(function() {
        $('.header__nav-link').removeClass('header__nav-link-active')
        $('html,body').animate({
            scrollTop: 0
        })
    })
    // Nav header menu mobile
    $(function menuMobile() {
        $('.header__nav-mobile-list').slideUp()
        $('.header__nav-mobile-icon').click(function() {
            $('.header__nav-mobile-list').slideToggle()
            $('.overlay-mobile').toggleClass('appear')
        })
        $('.overlay-mobile').click(function() {
            $('.overlay-mobile').toggleClass('appear')
            $('.header__nav-mobile-list').slideUp()
        })
        $('.header__nav-mobile-item:nth-child(1) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-about').offset().top - 70
            })
        })

        $('.header__nav-mobile-item:nth-child(1) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-about').offset().top - 70
            })
        })
        $('.header__nav-mobile-item:nth-child(2) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-services').offset().top - 70
            })
        })
        $('.header__nav-mobile-item:nth-child(3) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-gallery').offset().top - 60
            })
        })
        $('.header__nav-mobile-item:nth-child(4) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-contact').offset().top - 70
            })
        })
        $('.header__nav-mobile-item:nth-child(5) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-news').offset().top - 60
            })
        })
        $('.header__nav-mobile-item:nth-child(6) .header__nav-mobile-link').click(function(e) {
            e.preventDefault()
            $('.header__nav-mobile-list').slideUp()
            $('.overlay-mobile').removeClass('appear')
            $('html,body').animate({
                scrollTop: $('.row-reservation').offset().top - 70
            })
        })
        
    })
    // Nav header menu PC
    $(function navMenu() {
        $('.header__nav-link').click(function(e) {
            e.preventDefault()
            var behind = $('.header__nav-link-active').next()
            var menuItem = $('.header__nav-link')
            for(var i = 0; i <= menuItem.length; i++) {
                $('.header__nav-link').removeClass('header__nav-link-active')
            }
            $(this).addClass('header__nav-link-active')
        })
        $('.header__nav-item:nth-child(1) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-about').offset().top - 35
            })
        })
        $('.header__nav-item:nth-child(2) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-services').offset().top - 35
            })
        })
        $('.header__nav-item:nth-child(3) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-gallery').offset().top - 35
            })
        })
        $('.header__nav-item:nth-child(4) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-contact').offset().top - 35
            })
        })
        $('.header__nav-item:nth-child(5) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-news').offset().top - 35
            })
        })
        $('.header__nav-item:nth-child(6) .header__nav-link').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('.row-reservation').offset().top - 35
            })
        })
    })
    // Home gallery 
    $(function gallery() {
        // Viewport gallery animation
        $(function productAnimate() {
            $(window).scroll(function() {
                var bodyIndex = $('html,body').scrollTop()
                var containerIndex = $('.home__gallery').offset().top
                containerIndex = containerIndex - 200
    
                if(bodyIndex >= containerIndex) {
                    $('.home__gallery-item').addClass('appearUp')
                }
            })
        })
        // Menu gallery
        $('.home__gallery-link').click(function(e) {
            e.preventDefault()
            var galleryLinks = $('.home__gallery-link')
            for(var j = 0; j < galleryLinks.length; j++) {
                $('.home__gallery-link').removeClass('home__gallery-link-active')
            }
            $(this).addClass('home__gallery-link-active')
        })
    })
    // Home news animation 
    $(function newAnimate() {
        $(window).scroll(function() {
            var bodyIndex = $('html,body').scrollTop()
            var containerIndex = $('.home__news').offset().top
            containerIndex = containerIndex - 250

            if(bodyIndex >= containerIndex) {
                $('.home__news-item').addClass('appearUp')
            }
        })
    })
})