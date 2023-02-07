if (window.innerWidth <= 900) {
    $('.header__burger, .header__menu-link').click(function () {
        $('.header__menu, .header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    })
};