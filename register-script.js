var formRest = document.getElementById("formRest");
formRest.addEventListener("click", function (event) {
    event.preventDefault();
 

    // var answer=confirm("Are you sure to reset the form");
    // if (answer) {
    //     console.log("user want to reset");
    // }
})
formRest.addEventListener("mouseover",function(event){
    var popup = document.getElementById("popupText");
    popup.classList.toggle("show");
    console.log(popup);
})
formRest.addEventListener("mouseout",function(event){
    var popup = document.getElementById("popupText");
    popup.classList.toggle("show");
    console.log(popup);
})

var formSubmit = document.getElementById("formSubmit");
formSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var answer = confirm("Are you sure to submit the from");
    if (answer) {
        console.log("user want to submit");
    }
})