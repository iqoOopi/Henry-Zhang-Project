var cs = document.getElementById("customerService");
console.log(cs);
cs.style.bottom = 0 + "px";
cs.style.right = 0 + "px";
var goUp = true;
var goLeft = true;


//Customer need to click the contact button so stop moving when mouseover

cs.addEventListener("mouseover",function(){
    clearInterval(csTimer);
});
cs.addEventListener("mouseout",function(){
    csTimer = setInterval(moveCS, 10);
})



var csTimer = setInterval(moveCS, 10);

function moveCS() {
    if (parseInt(cs.style.right) <= 0){
        goLeft = true;
    }
    if (parseInt(cs.style.right) >= document.body.offsetWidth - cs.offsetWidth) {
        goLeft = false;
    }
    // console.log("trigged"+cs.style.top+" "+cs.offsetHeight);
    if (parseInt(cs.style.bottom) >= document.body.offsetHeight - cs.offsetHeight) {
        // console.log("trigged"+cs.style.top+" "+cs.offsetHeight);
        goUp = false;
    }
    if (parseInt(cs.style.bottom) <= 0) {
        goUp=true;
    }

    if (goUp) {
        cs.style.bottom = parseInt(cs.style.bottom) + 1 + "px";
    }
    else {
        cs.style.bottom = parseInt(cs.style.bottom) - 1 + "px";
    }
    if (goLeft) {
        // console.log(goLeft);
        cs.style.right = parseInt(cs.style.right) + 1 + "px";
    } else {
        cs.style.right = parseInt(cs.style.right) - 1 + "px";
    }


}