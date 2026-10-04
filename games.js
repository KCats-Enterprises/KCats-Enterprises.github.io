// The game list. To add a game: put its files in games/<folder>/ and add a line here.
// Every game here is open source; author, license and source are shown on its play page.
const GAMES = [
  { id: '2048', name: '2048', cat: 'Puzzle', icon: '🔢', color: '#b45309,#fbbf24',
    path: 'games/2048/index.html', author: 'Gabriele Cirulli', license: 'MIT',
    source: 'https://github.com/gabrielecirulli/2048' },
  { id: 'a-dark-room', name: 'A Dark Room', cat: 'Adventure', icon: '🔥', color: '#111827,#4b5563',
    path: 'games/a-dark-room/index.html', author: 'Doublespeak Games', license: 'MPL-2.0',
    source: 'https://github.com/doublespeakgames/adarkroom' },
  { id: 'adventure-with-anxiety', name: 'Adventure with Anxiety', cat: 'Story', icon: '🐺', color: '#9f1239,#fb7185',
    path: 'games/adventure-with-anxiety/index.html', author: 'Nicky Case', license: 'CC0',
    source: 'https://github.com/ncase/anxiety' },
  { id: 'black-hole-square', name: 'Black Hole Square', cat: 'Puzzle', icon: '⚫', color: '#1e1b4b,#6366f1',
    path: 'games/black-hole-square/index.html', author: 'Quinten Clause', license: 'MIT',
    source: 'https://github.com/Quinten/black-hole-square' },
  { id: 'hextris', name: 'Hextris', cat: 'Puzzle', icon: '⬡', color: '#0f766e,#5eead4',
    path: 'games/hextris/index.html', author: 'Engstrom, Finucane, Moroze, Yang', license: 'GPL-3.0',
    source: 'https://github.com/Hextris/hextris' },
  { id: 'n-gon', name: 'n-gon', cat: 'Action', icon: '🔺', color: '#3f3f46,#a1a1aa',
    path: 'games/n-gon/index.html', author: 'landgreen', license: 'GPL-3.0',
    source: 'https://github.com/landgreen/n-gon' },
  { id: 'particle-clicker', name: 'Particle Clicker', cat: 'Idle', icon: '⚛️', color: '#1e3a8a,#60a5fa',
    path: 'games/particle-clicker/index.html', author: 'Particle Clicker team (CERN Webfest)', license: 'MIT',
    source: 'https://github.com/particle-clicker/particle-clicker' },
  { id: 'space-company', name: 'Space Company', cat: 'Idle', icon: '🚀', color: '#0c4a6e,#38bdf8',
    path: 'games/space-company/index.html', author: 'sparticle999', license: 'MIT',
    source: 'https://github.com/sparticle999/SpaceCompany' },
  { id: 'trimps', name: 'Trimps', cat: 'Idle', icon: '🏕️', color: '#14532d,#4ade80',
    path: 'games/trimps/index.html', author: 'Trimps', license: 'GPL-2.0',
    source: 'https://github.com/Trimps/Trimps.github.io' },
  { id: 'we-become-what-we-behold', name: 'We Become What We Behold', cat: 'Story', icon: '📺', color: '#44403c,#d6d3d1',
    path: 'games/we-become-what-we-behold/index.html', author: 'Nicky Case', license: 'CC0',
    source: 'https://github.com/ncase/wbwwb' },
  { id: 'webgl-fluid-sim', name: 'WebGL Fluid Sim', cat: 'Toy', icon: '🌊', color: '#701a75,#e879f9',
    path: 'games/webgl-fluid-sim/index.html', author: 'Pavel Dobryakov', license: 'MIT',
    source: 'https://github.com/PavelDoGreat/WebGL-Fluid-Simulation' },
  { id: 'xx142-b2exe', name: 'xx142-b2.exe', cat: 'Action', icon: '🛸', color: '#7f1d1d,#f87171',
    path: 'games/xx142-b2exe/index.html', author: 'Ben Clark', license: 'MIT',
    source: 'https://github.com/bencoder/js13k-2019' },
];

// Recently played list, newest first, kept in this browser only.
function getRecent() {
  try { return JSON.parse(localStorage.getItem('recent')) || []; } catch (e) { return []; }
}

function addRecent(id) {
  try {
    const list = [id, ...getRecent().filter(x => x !== id)].slice(0, 20);
    localStorage.setItem('recent', JSON.stringify(list));
  } catch (e) {}
}
