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
tbl.style.marginLeft="auto";
tbl.style.marginRight="auto";
tr=tbl.insertRow();
// var td=tr.insertCell();
th=document.createElement("th");
th.appendChild(document.createTextNode("Image"));
tr.appendChild(th);
th=document.createElement("th");
th.appendChild(document.createTextNode("Description"));
tr.appendChild(th);
for (var i=0;i<=imgArray.length;i++){
    
    var tr=tbl.insertRow();
    var td=tr.insertCell();
    
    if (i<4){
        img=document.createElement("img");
        img.setAttribute("src",imgArray[i]);
        img.setAttribute("id","bannerImg"+i);
        img.addEventListener("click",showDescript);
        img.style.width="200px";
        td.appendChild(img);
    }
    if(i==0){
        var td=tr.insertCell();
        td.setAttribute('rowSpan',imgArray.length);
        td.setAttribute("id","description");
        td.appendChild(document.createTextNode("Click One Image For Description"));
        td.style.fontSize="40px";
    }
    
}
position.appendChild(tbl);
function showDescript (){
   var currentImage= event.currentTarget;
   var id=currentImage.getAttribute("id").substring(9);
   
    var td=document.getElementById("description");
    td.innerHTML=imgDescri[id];
  
}



