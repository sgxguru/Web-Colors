var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function getStyle(e,styleProp)
{
    let el=document.getElementById(e);
    if (el.currentStyle)
        return el.currentStyle[styleProp];

    return document.defaultView.getComputedStyle(el,null)[styleProp];
}
function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
function replaceColors(e, b,f){
    console.log("Called");
    b=validateColor(b);
    f=validateColor(f);
    console.log(b);
    console.log(f);
    if(e&&b&&f){
        console.log(e);
        e.style.backgroundColor=b;
        e.style.color=f;
        console.log(document.getElementById("block1").style);
    }
};
function validateColor(c){
    if(c){
        let regex= /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        let m = c.match(regex);
        if(m){
            console.log(m[0]);
            m=m[0];
        }else{
            console.log("Invalid Input");
            m="#000000";
        }
        return m;
    }
    else{
        return "#000000";
    }

};
function saveColors(){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("block1", document.getElementById("block1").style.color);
        localStorage.setItem("block1b", document.getElementById("block1").style.backgroundColor);
        localStorage.setItem("block2", document.getElementById("block2").style.color);
        localStorage.setItem("block2b", document.getElementById("block2").style.backgroundColor);
        localStorage.setItem("block3", document.getElementById("block3").style.color);
        localStorage.setItem("block3b", document.getElementById("block3").style.backgroundColor);
        localStorage.setItem("block4", document.getElementById("block4").style.color);
        localStorage.setItem("block4b", document.getElementById("block4").style.backgroundColor);
      } else {
        console.log("Browser does not support local storage");
      }
}
function getColors(){
    if (typeof(Storage) !== "undefined") {
        if(1 /*localStorage.block1 && localStorage.block2 && localStorage.block3 && localStorage.block4*/  ){
            document.getElementById("block1").style.color = localStorage.getItem("block1");
            document.getElementById("block1").style.backgroundColor = localStorage.getItem("block1b");
            console.log(localStorage.getItem("block1"));
            document.getElementById("block2").style.color = localStorage.getItem("block2");
            document.getElementById("block2").style.backgroundColor = localStorage.getItem("block2b");
            document.getElementById("block3").style.color = localStorage.getItem("block3");
            document.getElementById("block3").style.backgroundColor = localStorage.getItem("block3b");
            document.getElementById("block4").style.color = localStorage.getItem("block4");
            document.getElementById("block4").style.backgroundColor = localStorage.getItem("block4b");
        }
      } else {
        console.log("Browser does not support local storage");
      }  
}
showInputValues();
function showInputValues(){
    document.getElementById("block1-color").value=rgb2hex(getStyle("block1",`backgroundColor`));
    document.getElementById("block1-text-color").value=rgb2hex(getStyle("block1",`color`));
    document.getElementById("block2-color").value=rgb2hex(getStyle("block2",`backgroundColor`));
    document.getElementById("block2-text-color").value=rgb2hex(getStyle("block2",`color`));
    document.getElementById("block3-color").value=rgb2hex(getStyle("block3",`backgroundColor`));
    document.getElementById("block3-text-color").value=rgb2hex(getStyle("block3",`color`));
    document.getElementById("block4-color").value=rgb2hex(getStyle("block4",`backgroundColor`));
    document.getElementById("block4-text-color").value=rgb2hex(getStyle("block4",`color`));
}
document.getElementById("block1-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block1"), document.getElementById("block1-color").value,document.getElementById("block1-text-color").value);
})
document.getElementById("block1-text-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block1"), document.getElementById("block1-color").value,document.getElementById("block1-text-color").value);
})
document.getElementById("block2-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block2"), document.getElementById("block2-color").value,document.getElementById("block2-text-color").value);
})
document.getElementById("block2-text-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block2"), document.getElementById("block2-color").value,document.getElementById("block2-text-color").value);
})
document.getElementById("block3-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block3"), document.getElementById("block3-color").value,document.getElementById("block3-text-color").value);
})
document.getElementById("block3-text-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block3"), document.getElementById("block3-color").value,document.getElementById("block3-text-color").value);
})
document.getElementById("block4-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block4"), document.getElementById("block4-color").value,document.getElementById("block4-text-color").value);
})
document.getElementById("block4-text-color").addEventListener("change", function(){
    replaceColors(document.getElementById("block4"), document.getElementById("block4-color").value,document.getElementById("block4-text-color").value);
})