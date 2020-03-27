$("#slider").click(function() {
    // On button toggle:
    //Add a class to the html element for styling
    $("html").toggleClass("toggled")
    //Switch the word for day/night in the phrase "TO XXX MODE"
    //Hide it first
    $(".mode").slideToggle( "slow", function() {
        //If it's in night mode
        if ($(this).hasClass("night")) {
            //rewrite the html, swap classes, unhide
            $(this).html("NIGHT")
            $(this).toggleClass("night")
            $(this).toggleClass("day")
            $(this).slideToggle(function(){})
        }
        //If it's not it night mode, must be in day mode
        else {
            $(this).html("DAY")
            $(this).toggleClass("night")
            $(this).toggleClass("day")
            $(this).slideToggle(function(){})
        }
    }) 
})