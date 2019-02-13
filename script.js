$("#start").click(function(){
    $("#a").fadeIn(5000);
    $("h1").text("You must find 3 letters; bones are spread across the desert; click a rib twice for your first letter");
    $("button").fadeOut(2000);
});   
$("#a").dblclick(function(){
    $("#b").fadeIn(5000);
    $("h1").text("B B as in bat; theres a cat in this hat; click a whisker to get closer to a word like that");
    $("#a").fadeOut(2000);
});
$("#b").click(function(){
    $("#c").fadeIn(5000);
    $("#b").fadeOut(2000);
    $("h1").text("O Over the bridge, between the ridge, lies a cave that has a chest within, flip the coin to continue your journey");
});   
$("#c").click(function(){
    $("#c").slideUp(2000);
    $("#d").fadeIn(5000);
    $("h1").text("T The kraken appears, hungry as ever, stab the kraken to get to your treasure");
    $("body").css("background-color", "red");
});    
$("#d").click(function(){
    $("#d").hide();
    $("#e").show();
    $("h1").text("Sorry, but your chest full of gold is in another treasure hunt. Good work though for a BOT.");
    $("body").css("background-color","black");
    $("body").css("color","red");
    $(".lol").show();
});    