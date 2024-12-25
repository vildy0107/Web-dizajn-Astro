const facts = [
    "It travels at 17,500 mph. This means the ISS orbits the Earth about 16 times every single day!",
    "You can see the ISS with your own eyes. On a clear night, it looks like a bright, fast-moving star. ",
    "Astronauts exercise at least two hours a day.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Astronauts grow taller in space. Without the compression of gravity, their spines elongate.",
    "It took more than 115 space flights by spacecraft like the Space Shuttle and Proton rocket to construction the ISS.",
    "When the station is fully crewed there is usually 6 astronauts onboard.",
    "As of early 2018, a total of 230 people from 18 countries have visited the International Space Station.",
];

document.getElementById('new-fact-button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
