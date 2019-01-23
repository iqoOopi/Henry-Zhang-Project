var imgArray=new Array();
imgArray[0]="https://picsum.photos/500/300?random";
imgArray[1]="https://picsum.photos/500/300?random";
imgArray[2]="https://picsum.photos/500/300?random";
imgArray[3]="https://picsum.photos/500/300?random";
var imgDescri=new Array();
imgDescri[0]="num 1 image";
imgDescri[1]="num 2 image";
imgDescri[2]="num 3 image";
imgDescri[3]="num 4 image";

var position=document.getElementById("main-banner");
console.log(position);
tbl = document.createElement("table");
tbl.style.tableLayout = "fixed";
tbl.style.width = '80%';
tbl.style.textAlign = "center";

for (var i=0;i<=imgArray.length;i++){
    
    var tr=tbl.insertRow();
    var td=tr.insertCell();
    
    if (i<4){
        img=document.createElement("img");
        img.setAttribute("src",imgArray[i]);
        img.setAttribute("id","bannerImg");
        var j=i;
        console.log(j);
        img.addEventListener("click",function(){ showDescript(j); });
        td.appendChild(img);
    }
    if(i==0){
        var td=tr.insertCell();
        td.setAttribute('rowSpan',imgArray.length+1);
        td.setAttribute("id","description");
        td.appendChild(document.createTextNode("Click One Image For Description"));
    }
    
}
position.appendChild(tbl);
function showDescript (j){
    var td=document.getElementById("description");
    console.log(i);
    // td.appendChild(document.createTextNode(imgDescri[i]));
    td.appendChild(document.createTextNode(imgDescri[j]));
}


// var images=document.getElementsByClassName("bannerImg");
// images


