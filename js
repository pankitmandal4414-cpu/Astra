
// =====================================
// SECRET AGENT OS
// APP CONTROLLER
// =====================================

console.log("SECRET AGENT OS INITIALIZED");

// LIVE DIGITAL CLOCK
function updateClock() {
  const clock = document.getElementById("clock");

  if (clock) {
    clock.textContent = new Date().toLocaleTimeString(
      "en-IN",
      { hour12: false }
    );
  }
}

updateClock();
setInterval(updateClock, 1000);

// TERMINAL OUTPUT HELPER
function showSystemMessage(message) {
  const output = document.getElementById("output");

  if (!output) return;

  const line = document.createElement("p");
  line.textContent = "> " + message;
  output.appendChild(line);

  output.scrollTop = output.scrollHeight;
}

// MODULE INTERACTIONS
const modules = document.querySelectorAll(".module");

modules.forEach((module) => {
  module.addEventListener("click", () => {
    const name = module.dataset.module;

    showSystemMessage("MODULE SELECTED: " + name);
    showSystemMessage("Loading local demonstration...");
  });
});

// INITIALIZATION MESSAGE
window.addEventListener("load", () => {
  showSystemMessage("Dashboard initialized.");
  showSystemMessage("All modules ready.");
  showSystemMessage("Awaiting agent commands.");
});
