const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const display = document.querySelector(".hero-content");

canvas.width = display.clientWidth;
canvas.height = display.clientHeight + 90;

let stars = 100;
let frame;

if (canvas.width < "800") {
  stars = 50;
} else {
  stars = 100;
}

const particles = [];

const mouse = {
  x: undefined,
  y: undefined,
};

addEventListener("resize", () => {
  canvas.width = display.clientWidth;
  canvas.height = display.clientHeight + 90;

  // if (canvas.width < "800") {
  //   particles.splice(0, particles.length);
  //   stars = 50;
  //   generateParticles(stars);
  // } else {
  //   particles.splice(0, particles.length);
  //   stars = 100;
  //   generateParticles(stars);
  // }
});

class Particle {
  constructor() {
    this.radius = Math.random() * canvas.width + 30;
    this.velocity = 0.005;
    this.theta = Math.random() * Math.PI * 2;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  update() {
    if (this.theta >= Math.PI * 2) {
      this.theta = 0;
    }
    this.theta += this.velocity;
    this.x = canvas.width / 2 + this.radius * Math.cos(this.theta);
    this.y = canvas.height / 2 + this.radius * Math.sin(this.theta);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 3, 3);
    ctx.closePath();
  }
}

function generateParticles(total) {
  for (let i = 0; i < total; i++) {
    particles.push(new Particle());
  }
}

generateParticles(stars);

(function animate() {
  frame = requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.026)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
})();
