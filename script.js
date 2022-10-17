function timer(){
    let rem = parseInt(document.getElementById("time").innerHTML);
    let lvl = parseInt(document.getElementById("level").innerHTML);
    let w = parseInt(document.getElementById("wrong").innerHTML);
    
    if (document.getElementById("time").innerHTML != "--"){
        rem--;
        document.getElementById("time").innerHTML = rem;

        if (rem == -1 && lvl != 10){
            let ans = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value);
            document.getElementById("prompt").style.color = "red";
            document.getElementById("prompt").innerHTML = "Your time is up. The correct answer was: " + ans + ".";
            question();
            document.getElementById("time").innerHTML = "10";
            document.getElementById("level").innerHTML = (lvl + 1);
            document.getElementById("wrong").innerHTML = (w + 1);
        } else if(rem == -1 && lvl == 10){
            let ans = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value);
            document.getElementById("prompt").style.color = "red";
            document.getElementById("prompt").innerHTML = "Your time is up. The correct answer was: " + ans + ".";
            
            document.getElementById("time").innerHTML = "--";
            alert("Game Over.\n\nScore: " + document.getElementById("right").innerHTML + "/" + lvl);
            document.getElementById("wrong").innerHTML = (w + 1);
            
            document.getElementById("sub").disabled = true;
            document.getElementById("reset").disabled = false;
        }
    }
}

function question(){
    let n1 = Math.round(Math.random() * 10);
    let n2 = Math.round(Math.random() * 10);
    let ans = n1 + n2;
    
    document.getElementById("n1").value = n1;
    document.getElementById("n2").value = n2;
}

function answer(){
    let lvl = parseInt(document.getElementById("level").innerHTML);
    let ans = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value);
    let sub = parseInt(document.getElementById("answer").value);
    let r = parseInt(document.getElementById("right").innerHTML);
    let w = parseInt(document.getElementById("wrong").innerHTML);
    
    if(sub == ans && lvl < 10){
        document.getElementById("prompt").style.color = "green";
        document.getElementById("prompt").innerHTML = "Correct!";
        question();
        document.getElementById("time").innerHTML = "10";
        document.getElementById("level").innerHTML = (lvl + 1);
        document.getElementById("right").innerHTML = (r + 1);
        
    } else if(sub != ans && lvl < 10){
        document.getElementById("prompt").style.color = "red";
        document.getElementById("prompt").innerHTML = "Wrong answer. The correct answer was: " + ans + ".";
        question();
        document.getElementById("time").innerHTML = "10";
        document.getElementById("level").innerHTML = (lvl + 1);
        document.getElementById("wrong").innerHTML = (w + 1);
    } else if(lvl == 10){
        if(sub == ans){
            document.getElementById("prompt").style.color = "green";
            document.getElementById("prompt").innerHTML = "Correct!";
            document.getElementById("right").innerHTML = (r + 1);
        
        } else{
            document.getElementById("prompt").style.color = "red";
            document.getElementById("prompt").innerHTML = "Wrong answer. The correct answer was: " + ans + ".";
            document.getElementById("wrong").innerHTML = (w + 1);
        }
        
        document.getElementById("time").innerHTML = "--";
        alert("Game Over.\n\nScore: " + document.getElementById("right").innerHTML + "/" + lvl);
        
        document.getElementById("sub").disabled = true;
        document.getElementById("reset").disabled = false;
    }
}

function setTime(){
    setInterval(timer, 1000);
    document.getElementById("start").disabled = true;
    document.getElementById("sub").disabled = false;
}

document.getElementById("start").addEventListener("click", setTime);
document.getElementById("start").addEventListener("click", question);

document.getElementById("sub").addEventListener("click", answer);