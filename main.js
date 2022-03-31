let box = document.getElementById("box");
box.innerHTML = '<br><center><h3 id="text"></h3></center>';
let text = document.getElementById("text");

document.addEventListener('keydown', logKey);

function logKey(key) {
    if (key.code == "ArrowLeft" || key.code == "ArrowRight" || key.code == "Space"){
        random();
    }
}

function random(){
    let randomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomcolor;
    text.innerHTML = "#" + Math.floor(Math.random()*16777215).toString(16);

}


