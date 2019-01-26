var imgArray = new Array();
imgArray[0] = "pic/grid-img/beijing.jpg";
imgArray[1] = "pic/grid-img/bnaff.jpeg";
imgArray[2] = "pic/grid-img/leshan.jpg";
imgArray[3] = "pic/grid-img/taishan.jpg";

var imgDescri = new Array();
imgDescri[0] = "num 1 image:Beijing";
imgDescri[1] = "num 2 image: Bnaff";
imgDescri[2] = "num 3 image:LeShan";
imgDescri[3] = "num 4 image:TaiShan";


var imgLink = new Array();
imgLink[0] = "https://www.google.ca/";
imgLink[1] = "http://www.baidu.com/";
imgLink[2] = "https://www.bing.com/";
imgLink[3] = "https://ca.yahoo.com/";


var position = document.getElementById("main-banner");
console.log(position);
tbl = document.createElement("table");
tbl.style.tableLayout = "fixed";
tbl.style.width = '80%';
tbl.style.textAlign = "center";
tbl.style.marginLeft = "auto";
tbl.style.marginRight = "auto";
tr = tbl.insertRow();
th = document.createElement("th");
th.appendChild(document.createTextNode("Image"));
tr.appendChild(th);
th = document.createElement("th");
th.appendChild(document.createTextNode("Description"));
tr.appendChild(th);
for (var i = 0; i <= imgArray.length; i++) {

    var tr = tbl.insertRow();
    var td = tr.insertCell();

    if (i < imgArray.length) {
        img = document.createElement("img");
        img.setAttribute("src", imgArray[i]);
        // img.setAttribute("id", "bannerImg" + i);
        img.addEventListener("mouseover", showDescript);
        img.addEventListener("click", showWebsite);
        img.style.width = "200px";
        img.style.cursor = "pointer";
        td.appendChild(img);
    }
    if (i == 0) {
        var td = tr.insertCell();
        td.setAttribute('rowSpan', imgArray.length);
        // td.setAttribute("id", "description");
        td.appendChild(document.createTextNode("Click One Image For Description"));
        td.style.fontSize = "40px";
    }

}
position.appendChild(tbl);
function showDescript() {
    var currentImage = event.currentTarget;

    //get rows then get rowIndex which is ID
    var rowNumber = currentImage.parentNode.parentNode.rowIndex;
    console.log(currentImage.parentNode.parentNode);
    console.log(rowNumber);

    // var id = currentImage.getAttribute("id").substring(9);
    // var td = document.getElementById("description");

    //get content from particular table positon
    tbl.rows[1].cells[1].innerHTML = imgDescri[rowNumber - 1];

}

function showWebsite() {
    var currentImage = event.currentTarget;

    //get rows then get rowIndex which is ID
    var rowNumber = currentImage.parentNode.parentNode.rowIndex;
    var myWindow = window.open(imgLink[rowNumber - 1]);
    setTimeout(function () {
        myWindow.close();
    }, 2000);
}


