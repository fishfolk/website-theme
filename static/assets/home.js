// Grab our background slices elements.
const fg3 = document.getElementById("fg3");
const fg2 = document.getElementById("fg2");
const fg1 = document.getElementById("fg1");
const fish1 = document.getElementById("fish1");
const fish2 = document.getElementById("fish2");

// Randomize fish selection
const fish = ["catty", "fishy", "lionfishy", "orcy", "pescy", "sharky"];
const random1 = Math.floor(Math.random() * fish.length);
const random2 = Math.floor(Math.random() * (fish.length - 1));
fish1.style.backgroundImage = `url(assets/fish/${fish.splice(random1, 1)[0]}.png)`;
fish2.style.backgroundImage = `url(assets/fish/${fish.splice(random2, 1)[0]}.png)`;

// Particle container.
const particle_count = 30;
const particle_box = document.getElementById("particlebox");
const context = particle_box.getContext('2d');
const particle_texture = new Image(8, 8);
let particles = [];

// Generates a serving of fish puns.
const quotes = [
    "I’m hooked!",
    "Seems a bit fishy to me.",
    "I’d make him walk the plankton for that.",
    "Not bad, cod be better…",
    "It’s a great oppor-tuna-ty!",
    "We whaley need to stop now!",
    "Well, it’s oh-fish-ial.",
    "Keep your friends close and your anemones closer.",
    "Let’s just clam down shell we.",
    "Holy shrimp! This scampi happening.",
    "The new squid on the block.",
    "This is sardine to get ridiculous.",
    "It's krill or be krilled.",
    "You've got to be squidding me.",
    "Squid it already, will ya!",
    "Oh bouy, these are starting to get a little finicky.",
    "I'm sorry, I can't kelp it!",
    "Too many fish puns. We should scale back."
];
document.getElementById("quote").innerHTML = quotes[randomNumber(0, quotes.length)];

// Preform a parallax effect on etch element, use multiplication as the offset.
window.addEventListener('scroll', function () {
    let y = window.scrollY;
    fg1.style.top = (y * 0.6) + 'px';
    fg2.style.top = (y * 0.5) + 'px';
    fg3.style.top = (y * 0.3) + 'px';
})

// If the browser is resized then handle the canvas
window.addEventListener('resize', function () {
    particle_box.height = window.innerHeight;
    particle_box.width = window.innerWidth;
    context.imageSmoothingEnabled = false;
    for (let index = 0; index < particle_count; index++) {
        particles[index].x = Math.random() * window.innerWidth
    }
})

// Create particles.
particle_texture.src = 'assets/buble.png';
particle_box.height = window.innerHeight;
particle_box.width = window.innerWidth;

for (let index = 0; index < particle_count; index++) {
    let size = Math.floor(Math.random() * (10 - 32) + 32);
    particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * document.body.scrollHeight, width: size, height: size, speed: 0.8 + Math.random() * 1 });
}

// Particle update loop.
context.imageSmoothingEnabled = false;
let tick = 0;

function particles_update() {
    requestAnimationFrame(particles_update);
    context.clearRect(0, 0, particle_box.width, particle_box.height);
    // update each particle

    for (let index = 0; index < particle_count; index++) {
        if (particles[index].y <= 0) {
            particles[index].y = particle_box.height;
        } else {
            particles[index].y = particles[index].y - particles[index].speed;
        }
        particles[index].x = particles[index].x - (Math.sin(tick * 0.01 + particles[index].speed * 20) * 0.3);
        context.drawImage(particle_texture, particles[index].x, particles[index].y, particles[index].width, particles[index].height);
    }
    tick++;
}

particles_update();

// Utilities

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
