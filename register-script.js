var formRest = document.getElementById("formRest");
formRest.addEventListener("click", function (event) {
    event.preventDefault();
    var answer=confirm("Are you sure to reset the form");
    if (answer){
        console.log("user want to reset");
    }
})

var formSubmit = document.getElementById("formSubmit");
formSubmit.addEventListener("click",function (event){
    event.preventDefault();
    var answer=confirm("Are you sure to submit the from");
    if(answer){
        console.log("user want to submit");
    }
})