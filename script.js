let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

function bannerAnimation(){
    if(document.getElementById("image").getAttribute("src") === "img1.jpg"){
        $("#image").fadeOut(500).fadeIn(1, function(){
            $("#image").attr("src", "img2.jpg");
            
            $("#btn1").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
    
            $("#btn2").css({
                backgroundColor: "orange",
                borderColor: "orange"
            });

            $("#btn3").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn4").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn5").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
        });
    }
    
    else if(document.getElementById("image").getAttribute("src") === "img2.jpg"){
        $("#image").fadeOut(500).fadeIn(1, function(){
            $("#image").attr("src", "img3.jpg");
            
            $("#btn1").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
    
            $("#btn2").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn3").css({
                backgroundColor: "orange",
                borderColor: "orange"
            });

            $("#btn4").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn5").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
        });
    }
    
    else if(document.getElementById("image").getAttribute("src") === "img3.jpg"){
        $("#image").fadeOut(500).fadeIn(1, function(){
            $("#image").attr("src", "img4.jpg");
            
            $("#btn1").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
    
            $("#btn2").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn3").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn4").css({
                backgroundColor: "orange",
                borderColor: "orange"
            });

            $("#btn5").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
        });
    }
    
    else if(document.getElementById("image").getAttribute("src") === "img4.jpg"){
        $("#image").fadeOut(500).fadeIn(1, function(){
            $("#image").attr("src", "img5.jpg");
            
            $("#btn1").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
    
            $("#btn2").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn3").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn4").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn5").css({
                backgroundColor: "orange",
                borderColor: "orange"
            });
        });
    }
    
    else{
        $("#image").fadeOut(500).fadeIn(1, function(){
            $("#image").attr("src", "img1.jpg");
            
            $("#btn1").css({
                backgroundColor: "orange",
                borderColor: "orange"
            });
    
            $("#btn2").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn3").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn4").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });

            $("#btn5").css({
                backgroundColor: "transparent",
                borderColor: "black"
            });
        });
    }
}

function slide(){
    setInterval(bannerAnimation, 5000);
}

function setImg1(){
    $("#image").attr("src", "img1.jpg");
    
    $("#btn1").css({
        backgroundColor: "orange",
        borderColor: "orange"
    });
    
    $("#btn2").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn3").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn4").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn5").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
}

function setImg2(){
    $("#image").attr("src", "img2.jpg");
    
    $("#btn1").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn2").css({
        backgroundColor: "orange",
        borderColor: "orange"
    });
    
    $("#btn3").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn4").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn5").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
}

function setImg3(){
    $("#image").attr("src", "img3.jpg");
    
    $("#btn1").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn2").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn3").css({
        backgroundColor: "orange",
        borderColor: "orange"
    });
    
    $("#btn4").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn5").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
}

function setImg4(){
    $("#image").attr("src", "img4.jpg");
    
    $("#btn1").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn2").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn3").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn4").css({
        backgroundColor: "orange",
        borderColor: "orange"
    });
    
    $("#btn5").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
}

function setImg5(){
    $("#image").attr("src", "img5.jpg");
    
    $("#btn1").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn2").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn3").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn4").css({
        backgroundColor: "transparent",
        borderColor: "black"
    });
    
    $("#btn5").css({
        backgroundColor: "orange",
        borderColor: "orange"
    });
}

window.addEventListener("load", slide);
btn1.addEventListener("click", setImg1);
btn2.addEventListener("click", setImg2);
btn3.addEventListener("click", setImg3);
btn4.addEventListener("click", setImg4);
btn5.addEventListener("click", setImg5);