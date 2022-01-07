// let tank = document.getElementById("tank");
// let bomb = document.getElementById("bomb");
// let topBomb = parseInt(bomb.style["top"]);
// let leftBomb = parseInt(bomb.style["left"]);


function moveUp() {
    let tank = document.getElementById("tank");
    let bomb = document.getElementById("bomb");
    let topBomb = parseInt(bomb.style["top"]);
    let leftBomb = parseInt(bomb.style["left"]);
    let top = parseInt(tank.style["top"]);
    let left = parseInt(tank.style["left"]);

    tank.style["top"] = top - 19 + "px";
    top = parseInt(tank.style["top"]);
    left = parseInt(tank.style["left"]);
    console.log(top,left);
    console.log(topBomb,leftBomb);
    if (top == topBomb && left == leftBomb) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')";
        tank.style.zIndex = 1;
    } else {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175511/tank-1.png')";
        tank.style.zIndex = 1;
    }
}

function moveDown() {
    let tank = document.getElementById("tank");
    let bomb = document.getElementById("bomb");
    let topBomb = parseInt(bomb.style["top"]);
    let leftBomb = parseInt(bomb.style["left"]);
    let top = parseInt(tank.style["top"]); tank
    let left = parseInt(tank.style["left"]);
    tank.style["top"] = top + 19 + "px";
    top = parseInt(tank.style["top"]);
    left = parseInt(tank.style["left"]);

    if (top === topBomb && left === leftBomb) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')";
        tank.style.zIndex = 1;
    } else {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175511/tank-1.png')";
        tank.style.zIndex = 1;
    }
}
function moveRight() {
    let tank = document.getElementById("tank");
    let bomb = document.getElementById("bomb");
    let topBomb = parseInt(bomb.style["top"]);
    let leftBomb = parseInt(bomb.style["left"]);
    let top = parseInt(tank.style["top"]);
    let left = parseInt(tank.style["left"]);
    tank.style["left"] = left + 19 + "px";
    top = parseInt(tank.style["top"]);
    left = parseInt(tank.style["left"]);

    if (top == topBomb && left == leftBomb) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')";
        tank.style.zIndex = 1;
    } else {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175511/tank-1.png')";
        tank.style.zIndex = 1;
    }
}
function moveLeft() {
    let tank = document.getElementById("tank");
    let bomb = document.getElementById("bomb");
    let topBomb = parseInt(bomb.style["top"]);
    let leftBomb = parseInt(bomb.style["left"]);
    let top = parseInt(tank.style["top"]);
    let left = parseInt(tank.style["left"]);
    tank.style["left"] = left - 19 + "px";
    top = parseInt(tank.style["top"]);
    left = parseInt(tank.style["left"]);

    if (top == topBomb && left == leftBomb) {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175504/explosion.png')";
        tank.style.zIndex = 1;
    } else {
        tank.style.backgroundImage = "url('https://s3.ap-southeast-1.amazonaws.com/learn.codegym.vn/media/public/2020/12/04175511/tank-1.png')";
        tank.style.zIndex = 1;
    }
}


