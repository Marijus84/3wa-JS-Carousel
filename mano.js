
let pause = true;
let adress = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"]
let name = ["1", "2", "3", "4","5","6"];
let index = 0;
document.getElementById("one").src = adress[index];
document.getElementById("title").innerHTML = name[index];
let tid;


function toggle() {
  pause = !pause;
  icon = document.querySelector('#slider-toggle i');
  icon.classList.toggle('fa-play');
  icon.classList.toggle('fa-pause');
  if (pause) {
    clearInterval(tid);
    }
    else { tid = setInterval (next, 2000);}
  }

function visibility() {
  var tohide = document.getElementsByClassName("btn");
  for (let i = 0; i < tohide.length; i++) {
    tohide[i].classList.toggle("hid");
    }
  }

function previous() {
  clearInterval(tid);icon.classList.toggle('fa-play');
  icon.classList.toggle('fa-pause');
  index = index - 1;
  if (index == -1) {
    index = 5;
    }
  document.getElementById("one").src = adress[index];
  document.getElementById("title").innerHTML = name[index];
  tid = setInterval (next, 2000);
  }

function next() {
  clearInterval(tid);
  index = index + 1;
  if (index == 6) {
    index = 0;
  }
  document.getElementById("one").src = adress[index];
  document.getElementById("title").innerHTML = name[index];
  tid = setInterval (next, 2000);
}

function random(){
  clearInterval(tid);
  let temp = Math.floor(Math.random() * 6);
  index = temp;
  console.log(index);
  document.getElementById("one").src = adress[index];
  document.getElementById("title").innerHTML = name[index];
  tid = setInterval (next, 2000);
}



function test() {
  console.log("test");
  let anime = document.getElementById("one");
  anime.classList.toggle('wide');
}
