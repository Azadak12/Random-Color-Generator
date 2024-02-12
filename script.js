function getcolor(){
    const randomnum = Math.floor(Math.random() * 16777215);
    const conversion = "#" + randomnum.toString(16);
    document.body.style.backgroundColor= conversion;
    document.getElementById("ccode").innerHTML= conversion;
  
}
document.getElementById("btn").addEventListener(
    "click",
    
getcolor
)
getcolor();