//Start of the parralax 'Header'
    //Here the bulk of this javascript code was drawn from the youtube video "Online Tutorials (2020) Simple Parallax Scrolling Effect with CSS & Vanilla Javascript. 29 March. Available at: https://www.youtube.com/watch?v=TawH-AqHTXc&t=207s (Accessed: 21 April 2021)."//

    //Additionally, it was decided that the colourscheme should be simplifed, it boldness and contrast increased in order to allow the site to be accessible to a wwider array of users, with visual and mental impairements, as well as colour vision deficiencies.//

    let parralaxBgImage = document.getElementById("ParralaxBgImage");
    let front = document.getElementById("Front");
    let parralaxTextSection = document.getElementById("ParralaxTextSection");
    //Differing from the prior mentioned source, the parralax effect was simplified, with only 2 image layers and one text layer being needed, as such 2 "let" linesof code were ultimately removed, making the animation less complex, and easier to run on weaker, mobile devices, which may not have the capacity to runs such complex and layered aniamtions, hence the movement from the prior website designs and their more layered animation effects..//

    //These are 'Objects', a datatype list which identifies the elements we want to move with our "addEventListener" function.//

    //We start off with a "let" variable followed by the name of the , giving it a name followed by a 'dot ntotation' "Document" 'Object' in order to indicate what it is we want the script to change, with its 'method' indicated by the "getElementById" code.//

    window.addEventListener('scroll', function(){
      var value = window.scrollY;
      //Here the "var" indicates the scroll direction which will activate the Parralax animation of the "img" layers, the "addEventListener" waiting for this to occur, with this code directly sourced from the prior mentioned tutorial ("https://www.youtube.com/watch?v=TawH-AqHTXc&t=207s" (Online Tutorials, 2020)).//

      parralaxBgImage.style.top = -value * 0.25 + 'px';
      front.style.top = value * 0.2 + 'px';
      parralaxTextSection.style.top = value * 0.01 + 'px';
    })
    //The first line indicates the 'Object' we're changing, followed by what we're changing about it ("style"), followed again by the direction we want to move this.
    //As such, differing from the tutorial it was decided that the "ParralaxBgImage" should move from its 'bottom' in opposition to the direction of the "Front" elelment, emphassising the effect we have simplified from the example.//

    //^^This "value" allows us to change the speed of each "img" elements movement, when activated with the scroll wheel / scroll bar input, as is indicated by the use of the 'scroll', function()" and the direction of the instigating input directed by the "scrollY;" element.//

//End of the parralax 'Header'//












//This Scrolling, Fade-in 'JS'effect, was sourced from "Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021)".//

      //(Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021).)//




//Here, only one element was altered from the orignal code, the 'opacity' transition length.//
$(document).ready(function() {
      //This first line of code is utilised to group the rest of the code, used to create the animation effect.//

    $(window).scroll( function(){
      //The above function is used, telling the animation to start when the scroll is activated within the window. //


        $('.AboutTile').each( function(i){
          //This line of code is used to identify the sourced groups that are wanted for the effect to be applied to, the origninal  "hideme" text was replaced with the "AboutImage" text.//

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
              //Here, these two variables are utilised, ttelling the browser the location of the bottom of the prior indicated object and the bottom of the window, the below code then saying, if the bottom of the window is greater than that of teh objects bottom location, the animation will then activate.//

            if( bottom_of_window > bottom_of_object ){
              //This line of code ('Conditional Logic') then tells the browser, if the object is now within frame from both the top and bottom of the browser, that its below dictated animation should be activated.//

                $(this).animate({'opacity':'1'},800);
                //This code is used, telling to animate the prior indicated groups, changing their CSS, "0" Opacity to "1", the end number indicating the animations duration, the animation length increased, the "500"  to "800", from the rogiinally sourced code ("http://jsfiddle.net/tcloninger/e5qaD/")//

            }

        });

    });

});











//Here, the same alterations were again altered to give the scrolling, fade-in effect, the code sourced from "Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021)".
$(document).ready(function() {
    $(window).scroll( function(){
        $('.AboutText').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});












//Alterations were again made, giving the scrolling / fade-in effect, the code sourced from "Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021)".
$(document).ready(function() {
    $(window).scroll( function(){
        $('.TimelineTile').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});





//This Scrolling, Fade-in 'JS'effect, was sourced from "Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021)".//
$(document).ready(function() {
    $(window).scroll( function(){
        $('h6').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});





//This Scrolling, Fade-in 'JS'effect, was sourced from "Tcloninger. (no date) FadeIn on Scroll (jQuery). Available at: http://jsfiddle.net/tcloninger/e5qaD/ (Accessed: 26 April 2021)".//
$(document).ready(function() {
    $(window).scroll( function(){
        $('.ClothesTab').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1 '},600);

            }

        });

    });

});
