window.addEventListener('load', function () {
    setTimeout(function(){
        var modal = document.querySelector('#modal-load').style.opacity = 0;
    var zone = document.querySelector('#zone');
        zone.style.display = 'block';
    }, 1700);
    window.onkeyup = function (e) {
        if (e.keyCode == 37 || e.keyCode == 65) {
            var id = setInterval(frame);
            var btn = document.getElementById("A").style.transform = "scale(1.1)";

            function frame() {
                pos_x--;
//                document.querySelector('#zone').style.transform = "rotateY("+ (pos_x-200)/2 +"deg)";
                var pl = document.getElementById("pl");
                pl.style.left = pos_x + "px";
                
                if (pos_x % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_x == -1) {
                    pos_x = 0;
                }
                spawn();
                var btn = document.getElementById("A").style.transform = "scale(1)";
            }
        } else if (e.keyCode == 38 || e.keyCode == 87) {
            var id = setInterval(frame);
             var btn = document.getElementById("W").style.transform = "scale(1.1)";

            function frame() {
                pos_y--;
//                document.querySelector('#zone').style.transform = "rotateX("+ (pos_y-200)/2 +"deg)";
                var pl = document.getElementById("pl");
                pl.style.top = pos_y + "px";
                if (pos_y % 50 == 0) {
                    clearInterval(id);

                }
                if (pos_y == -1) {
                    pos_y = 0;
                }
                spawn();
                var btn = document.getElementById("W").style.transform = "scale(1)";
            }

        } else if (e.keyCode == 39 || e.keyCode == 68) {
            var id = setInterval(frame);
            var btn = document.getElementById("D").style.transform = "scale(1.1)";

            function frame() {
                pos_x++;
//                document.querySelector('#zone').style.transform = "rotateY("+ (pos_x-200)/2 +"deg)";
                var pl = document.getElementById("pl");
                pl.style.left = pos_x + "px";
                if (pos_x % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_x == 451) {
                    pos_x = 450;
                }
                spawn();
                var btn = document.getElementById("D").style.transform = "scale(1)";
            }


        } else if (e.keyCode == 40 || e.keyCode == 83) {
            var id = setInterval(frame);
            var btn = document.getElementById("S").style.transform = "scale(1.1)";

            function frame() {
                pos_y++;
//                document.querySelector('#zone').style.transform = "rotateX("+ (pos_y-200)/2 +"deg)";
                var pl = document.getElementById("pl");
                pl.style.top = pos_y + "px";
                if (pos_y % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_y == 451) {
                    pos_y = 450;
                }
                spawn();
                var btn = document.getElementById("S").style.transform = "scale(1)";
            }

        }
    }
})

var pos_x = 0;
var pos_y = 0;
var pos_1 = 0;
var pos_2 = 0;
var score = 0;

function random() {
    var bon = document.getElementById("bon");

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    pos_1 = randomInteger(1, 9) * 50;
    pos_2 = randomInteger(1, 9) * 50;
    bon.style.left = pos_1 + "px";
    bon.style.top = pos_2 + "px";
}

function spawn() {
    if (pos_1 == pos_x && pos_2 == pos_y - 50) {
        random();
        var pl = document.getElementById("pl");
        var sc = document.getElementById("score");
        var r = Math.floor(Math.random() * (256));
        var g = Math.floor(Math.random() * (256));
        var b = Math.floor(Math.random() * (256));
        var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        pl.style.background = c;
        score++;
        sc.innerHTML = score;
    }
    
}

let pos_1en = 0;
let pos_2en = 0;
let h = 0;
let timer; // пока пустая переменная
let x =120; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown(){  // функция обратного отсчета
  document.getElementById('taimer').innerHTML = x;
  x--; // уменьшаем число на единицу
  if ((x % 10) == 0){
      h = h -180;
      document.querySelector('#zone').style.transform = "rotateY("+ h +"deg)"; 
      
  }
  if ((x %6) == 0) {
      document.querySelector(".enem").style.left = pos_1 + "px";
      document.querySelector(".enem").style.top = pos_2+50 + "px";
      setTimeout(function (){
              random();
      },600
      );
  }
  if ((x % 115) == 0){
        var d=document.createElement('div');
        d.className='enem';
        document.querySelector("#zone").appendChild(d);
    }
     
  if (x<0){
    clearTimeout(timer); // таймер остановится на нуле
    document.querySelector('#modal-load').style.opacity = 1;
    document.querySelector('#zone').style.display = 'none';
    document.querySelector('.wasd').style.display = 'none';
    document.querySelector('#cat').style.display = 'none';
    document.querySelector('#taimer').style.opacity = 'block';
    document.querySelector('#modal-load p').innerHTML = "SCORE <br>" + score + ' <a href="index.html" id="rest">Again</a>' ;
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}
