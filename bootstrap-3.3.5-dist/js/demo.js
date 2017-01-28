/**
 * Created by dangoltanu on 6/8/2016.
 */
$(function() {

    $("#home h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

$(document).ready(function() {

    //active menu
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

//nav-active
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.menu-list a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

/*$(".skill-1").hover(function(){
    $(this).css("height","300px");
    $(this).css("width","600px");
},function(){
    $(this).css("height","auto");
    $(this).css("width","auto");

})*/
