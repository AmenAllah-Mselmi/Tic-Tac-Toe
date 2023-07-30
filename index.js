let  x=1;
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let p4=document.getElementById("p4");
let p5=document.getElementById("p5");
let p6=document.getElementById("p6");
let p7=document.getElementById("p7");
let p8=document.getElementById("p8");
let p9=document.getElementById("p9");
let main=document.querySelector("main");
let test1=false;
let test2=false;
let test3=false;
let test4=false;
let test5=false;
let test6=false;
let test7=false;
let test8=false;
let test9=false;
let test11=false;
let test12=false;
let test13=false;
let test14=false;
let test15=false;
let test16=false;
let test17=false;
let test18=false;
let test19=false;
let testf=false;
let testf1=false;
let player1=prompt("Donnez votre nom");
let player2=prompt("Donnez votre nom");
// let t1=[0,0,0,0,0,0,0,0,0];
// let t2=[0,0,0,0,0,0,0,0,0];
let announcer=function(){
    let e1=document.createElement("div");
    let txt;
    if(testf===true && testf1===false){
        txt=document.createTextNode(`${player1} wins`);
    }
    else if(testf1===true && testf===false){
        txt=document.createTextNode(`${player2} wins`);
    }
    else{
    txt=document.createTextNode("Equality");  
    }
    e1.append(txt);
    e1.style.cssText="height:100%; width:100%; display:flex; justify-content:center; align-items:center; color:white; background-color:red; font-size:40px;"
    main.append(e1);
}
p1.addEventListener("click",function(){
if(x%2!=0){
p1.style.backgroundColor="black";
x++;
test1=true;
}
else{
p1.style.backgroundColor="green";   
x++;
test11=true;
}
f();
})
p2.addEventListener("click",function(){
if(x%2!=0){
p2.style.backgroundColor="black";
x++;
test2=true;
}
else{
p2.style.backgroundColor="green";   
x++;
test12=true;
}  
f();
})
p3.addEventListener("click",function(){
    if(x%2!=0){
p3.style.backgroundColor="black";
x++;
test3=true;
}
else{
p3.style.backgroundColor="green";   
x++;
test13=true;
}
f();
})
p4.addEventListener("click",function(){
if(x%2!=0){
p4.style.backgroundColor="black";
x++;
test4=true;
}
else{
p4.style.backgroundColor="green";   
x++;
test14=true;
} 
f();
})
p5.addEventListener("click",function(){
if(x%2!=0){
p5.style.backgroundColor="black";
x++;
test5=true;
}
else{
p5.style.backgroundColor="green";   
x++;
test15=true;
}  
f();
})
p6.addEventListener("click",function(){
if(x%2!=0){
p6.style.backgroundColor="black";
x++;
test6=true;
}
else{
p6.style.backgroundColor="green";   
x++;
test16=true;
}  
f();
})
p7.addEventListener("click",function(){
if(x%2!=0){
p7.style.backgroundColor="black";
x++;
test7=true;
}
else{
p7.style.backgroundColor="green";   
x++;
test17=true;
}  
f();
})
p8.addEventListener("click",function(){
if(x%2!=0){
p8.style.backgroundColor="black";
x++;
test8=true;
}
else{
p8.style.backgroundColor="green";   
x++;
test18=true;
}  
f();
})
p9.addEventListener("click",function(){
if(x%2!=0){
p9.style.backgroundColor="black";
x++;
test9=true;
}
else{
p9.style.backgroundColor="green";   
x++;
test19=true;
}  
f();
})
let h1=function(){
    if(test1===true && test2===true&& test3===true){
        return true;
    }
    else if(test4===true && test5===true&& test6===true){
        return true;
    }
    else if(test7===true && test8===true&& test9===true){
        return true;
    }
    else if(test4===true && test5===true&& test6===true){
        return true;
    }
    else if(test4===true && test1===true&& test7===true){
        return true;
    }
    else if(test2===true && test5===true&& test8===true){
        return true;
    }
    else if(test3===true && test9==true&& test6===true){
        return true;
    }
    else if(test1===true && test5===true&& test9===true){
        return true;
    }
    else if(test3===true && test5===true&& test7===true){
        return true;
    }
    else{
        return false;
    }
}
let h2=function(){
if(test11===true && test12===true&& test13===true){
        return true;
    }
    else if(test14===true && test15===true&& test16===true){
        return true;
    }
    else if(test17===true && test18===true&& test19===true){
        return true;
    }
    else if(test14===true && test15===true&& test16===true){
        return true;
    }
    else if(test14===true && test11===true&& test17===true){
        return true;
    }
    else if(test12===true && test15===true&& test18===true){
        return true;
    }
    else if(test13===true && test19==true&& test16===true){
        return true;
    }
    else if(test11===true && test15===true&& test19===true){
        return true;
    }
    else if(test13===true && test15===true&& test17===true){
        return true;
    }
    else{
        return false;
    }
}
let f=function(){
    testf=h1();
    testf1=h2();
    if(x===10 || testf===true|| testf1===true){
        announcer();
    }
}

