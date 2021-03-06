'use strict';
/* ----section 1------ */
var button = document.getElementsByClassName("button");

var click=0;
function count(){
    click++;
    var heading = document.getElementById("count");
    heading.innerText = "Box clicked "+click+" times";    
}

button[0].addEventListener('click',count);

/* ----section 2------ */
var toggled = false;

$('.toggle').click(function(){
    if(!toggled){
        $("#section2").css('background-color','black');
        $(".toggle-heading").css('color','white');
    }
    else{
        $("#section2").css('background-color','#b5ecb7');
        $(".toggle-heading").css('color','black');
    }
    toggled = !toggled;
    
})


/*-------------section 3----------------*/
var curr = "square";

var shape = ["square", "rectangle", "oval", "triangle-up", "triangle-down", "triangle-right", "triangle-left", "trapezoid", "parallelogram"];

var color = ["red", "green", "yellow", "orange", "cyan", "maroon", "pink", "voilet"];

function ChangeColor(){
    var rand = color[Math.floor(Math.random() * color.length)];
    document.getElementById("circle").style.backgroundColor = rand;
}

function ChangeShape(){
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(curr).setAttribute("id", rand);
    curr = rand;
}

document.getElementById("Shape").onclick = ChangeShape;
document.getElementById("Color").onclick = ChangeColor;

/*-----------------------section 4------------------------------------ */

var ball_container = document.getElementById("ball-container");
var ball = document.getElementById('ball');

ball.style.top = ball.offsetTop - ball_container.offsetTop + "px";
ball.style.left = ball.offsetLeft - ball_container.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function keyCode(keyPressed){
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);


    if(keyPressed === "W" || keyPressed ==="w"){
        if(top > 5){
            ball.style.top = (top-5)+"px";
        }
    }
    else if(keyPressed === "a" || keyPressed ==="A"){
        if(left > 5){
            ball.style.left = (left-5)+"px";
        }
    }
    else if(keyPressed==="s" || keyPressed==="S"){
        if(top+150 < ball_container.offsetHeight-5){
            ball.style.top = (top+5)+"px";
        }
        
    }
    else if(keyPressed === "d" || keyPressed === "D"){
        if(left+150 < ball_container.offsetWidth-5){
            ball.style.left = (left+5)+"px";
        }
    }

}

window.addEventListener("keypress", function(event){
    keyCode(event.key);
});

/*-----------------------section 5------------------------------------ */
var box = document.getElementById("catchme-box");
var box_container = document.getElementById("box-container");

var viewWidth = box_container.offsetWidth;
var viewHeight = box_container.innerHeight;

var containerAttr = box_container.getBoundingClientRect();

box.addEventListener("mouseover",function(event){
    var boxAttr = box.getBoundingClientRect();
    

    var pos = newPosition(boxAttr.width, boxAttr.height);

    box.style.top = pos.y + "px";
    box.style.left =  pos.x +"px";
    console.log(box.offsetHeight);
});

function newPosition(boxWidth, boxHeight){
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);
    

    
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}

/*--------------------------section 6---------------------------- */
var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

var box = $("#ball-box");

$("button").click(function(e) {
    box.append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
});


/*------------------------------------------------------------------------------ */
