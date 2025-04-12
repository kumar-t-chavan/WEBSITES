let s1 = document.getElementById("sqr1");
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100)
    s1.innerHTML = `<h1>${r}</h2>`;
})

s1.addEventListener("mouseleave",function(){
    s1.innerHTML = "<h1>1</h1>";
    s1.style.fontSize = "xx-bolder"
    

})


//second square//


let s2 = document.getElementById("sqr2");
let clr = "red";
s2.addEventListener("mouseenter",function(){
   

    
    if(clr=="red"){
        s2.style.backgroundColor = "red";
        clr = "green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor = "green";
        clr = "blue";
    } 
    else {
        s2.style.backgroundColor = "blue";
        clr = "green";
    }

s2.addEventListener("mouseleave",function(){
   s2.style.backgroundColor = "white";
    

})
})


//THIRD SQUARE//


let s3 = document.getElementById("sqr3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256)
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    s3.style.backgroundColor= `rgb(${r1},${r2},${r3})`;
    
})

s3.addEventListener("mouseleave",function(){
    
    s3.style.backgroundColor= "white";
    

})


let s4 = document.getElementById("sqr4");
s4.addEventListener("click",function(){
    let b1 = Math.floor(Math.random()*256)
    let b2 = Math.floor(Math.random()*256)
    let b3 = Math.floor(Math.random()*256)
    s1.style.backgroundColor = `rgb(${b1},${b2},${b3})`;
    s2.style.backgroundColor = `rgb(${b2},${b3},${b1})`;
    s3.style.backgroundColor = `rgb(${b3},${b2},${b3})`;
})

s4.addEventListener("mouseleave",function(){
 s4.style.backgroundColor = "white";
 s1.style.backgroundColor = "white";
 s2.style.backgroundColor = "white";
 s3.style.backgroundColor = "white";

    

})


let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove", function(details) {
    console.log(details.x, details.y);
    crsr.style.left = details.x + "px";
    crsr.style.top = details.y + "px";
});
