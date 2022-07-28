(function($) {
    $(".dropdown-select").on("click", function (){
        var $this = $(this);
        $this.find(".dropdown-items").toggle()
    });
})( jQuery );