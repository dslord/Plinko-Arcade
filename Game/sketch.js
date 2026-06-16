const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 150;
var score = 0;
var count = 0;
var gameState = "start";

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    engine = Engine.create();
    world = engine.world;

    for (var k = 0; k <= width; k = k + 100) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 5, divisionHeight));
    }

    for (var i = 80; i <= (height + 300) / 2; i = i + 65) {
        for (var j = 15; j <= width; j = j + 55) {
            if (i % 2 == 0) {
                plinkos.push(new Plinko(j , i));
            } else {
                plinkos.push(new Plinko(j + 25 , i));
            }
        }
    }

    ground1 = new Ground(-10, 10, 10, windowWidth - 20);
    ground2 = new Ground(windowWidth - 10, 10, 10, windowWidth - 20);
}
 
function draw() {
    background("black");
    
    fill("white");
    textSize(16);
    text("Score : " + score, 20, 30);
    text("Count : " + count, 20, 50);

    var last = 100;
    var div = 0;
    for (div = 35; div < width / 2; div = div + 100) {
        text(last, div, windowHeight - 100);
        last += 100;
    }

    last -= 200;
    for (; div < width; div = div + 100) {
        text(last, div, windowHeight - 100);
        last -= 100;
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();  
    }

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].display();

        var x = particles[i].body.position.x;
        var y = particles[i].body.position.y;
        
        if (x < width / 2 && y > height - 20) {
            particles.splice(i, 1);

            var pos = x;
            while (pos > 0) {
                score += 100;
                pos -= 100;
            }
        } else if (x > width / 2 && y > height - 20) {
            particles.splice(i, 1);

            var pos = x;
            for (var i = width; i > pos; i = i - 100) {
                score += 100;
            }
        }
    }

    if (count == 5 && particles.length == 0) {
        fill("black");
        rect(windowWidth / 2 - 10, windowHeight / 2 - 10, windowWidth - 20, windowHeight - 20);

        textSize(50);
        fill("red");
        text("Game Over", windowWidth / 3 + 185, windowHeight / 2 - 50);

        textSize(16);
        fill("white");
        text("Score = " + score, windowWidth / 3 + 265, windowHeight / 2 - 10);

        reload = createButton("Play Again?");
        reload.class("reload-button");
        reload.mousePressed(() => location.reload());
        reload.position(windowWidth / 3 + 250, windowHeight / 2 + 20);

        gameState = "end";
    }

    Engine.update(engine);
    ground1.display();
    ground2.display();
}

function mousePressed() {
    if (gameState != "end" && particles.length == 0) {
        count++;
        particles.push(new Particle(mouseX, 10, 10)); 
    }
}
