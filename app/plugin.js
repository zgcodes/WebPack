(function ($) {
    const shade = "#00FA9A";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));