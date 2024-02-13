$("#animateButton").on("click", function(){
    $("#profile-pic").css({"border-width": "3px", "border-color": "black", "border-style": "solid"});
    $( "#main h1" ).css({
        "color":"red"
    });
    $( "#main h1" ).animate({
        "font-size":"60px"
    }, 1000, function(){
        setTimeout(function(){
            $( "#main h1").css({
                color: "black"
            });
            $( "#main h1" ).animate({
                "font-size":"40px"
            }, 1000);
        }, 500);
    })
});
