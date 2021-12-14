//date code
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;

//Verifying the contents of the form
    function verifyForm(){
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        (email && subject) ?
            window.alert("Your request has been submitted") :
            window.alert("Next time");
        
    }
    document.getElementById("submit").addEventListener("click", verifyForm);

//navbar code
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
          $('nav').addClass('black');
        } else {
          $('nav').removeClass('black');
        }
      })


  //counter code
  // Button Activators
    var plusButton = document.getElementById("increase-count");
    var minusButton = document.getElementById("decrease-count");

// Counter Activator
    var counter = document.getElementById("count");

// Function to increase count by one
    plusButton.addEventListener("mouseover", function() {
        var counterInteger = parseInt(counter.innerHTML)
        var increasedValue = counterInteger + 1;
        counter.innerHTML = increasedValue;
    });
    
// Function to reduce count by one
    minusButton.addEventListener("mouseover", function() {
        var counterInteger = parseInt(counter.innerHTML)
        var decreasedValue = counterInteger - 1;
        counter.innerHTML = decreasedValue;
    });