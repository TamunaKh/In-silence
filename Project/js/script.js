const content = document.getElementById('content');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');

const chaos = [
  "💡 Tamuna said: 'Just one more console.log() and it’ll work.'",
  "🔥 The code runs perfectly… if you don’t touch it.",
  "🦥 We tried optimizing it. Now it’s just slower and confused.",
  "🎵 Debugging soundtrack: silent screams.",
  "🦄 Adeyinka found a bug. Tamuna named it Steve.",
  "🤖 The computer said 'no'. We said 'please'. Still no.",
  "☁️ Our code lives in the cloud now. Literally lost there.",
  "💾 We forgot to save, but destiny auto-saved it.",
  "🧠 Memory leak? More like emotional leak."
];


addBtn.addEventListener('click', () => {
  const idea = chaos[Math.floor(Math.random() * chaos.length)];
  const section = document.createElement('div');
  section.className = 'section';
  section.textContent = idea;
  content.appendChild(section);
});

removeBtn.addEventListener('click', () => {
  if (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  } else {
    alert("All sections are gone! Time to go home!");
  }
});