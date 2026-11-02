
// ======================================
// SECRET AGENT OS
// INTERACTIVE TERMINAL
// SAFE LOCAL SIMULATION
// ======================================

const commandForm = document.getElementById("command-form");
const commandInput = document.getElementById("command");
const terminalOutput = document.getElementById("output");

function terminalPrint(message) {
  const line = document.createElement("p");
  line.textContent = "> " + message;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function runCommand(command) {
  const cmd = command.trim().toLowerCase();

  if (!cmd) return;

  terminalPrint("AGENT@SAOS:~$ " + cmd);

  switch (cmd) {

    case "help":
      terminalPrint("AVAILABLE COMMANDS:");
      terminalPrint("help - Show commands");
      terminalPrint("status - System status");
      terminalPrint("scan - Simulated security scan");
      terminalPrint("missions - Show missions");
      terminalPrint("whoami - Agent identity");
      terminalPrint("clear - Clear terminal");
      break;

    case "status":
      terminalPrint("SYSTEM: ONLINE");
      terminalPrint("SECURITY: DEMO MODE");
      terminalPrint("CONNECTION: LOCAL");
      terminalPrint("DEVICE ACCESS: NOT ENABLED");
      break;

    case "scan":
      terminalPrint("Starting simulated security scan...");
      terminalPrint("Checking demo environment...");
      terminalPrint("No external devices accessed.");
      terminalPrint("Simulation completed successfully.");
      break;

    case "missions":
      terminalPrint("MISSION 01: Network Security");
      terminalPrint("MISSION 02: Password Audit");
      terminalPrint("MISSION 03: Device Protection");
      break;

    case "whoami":
      terminalPrint("IDENTITY: SECRET AGENT");
      terminalPrint("ACCESS LEVEL: TRAINING");
      terminalPrint("ORGANIZATION: SAOS");
      break;

    case "clear":
      terminalOutput.innerHTML = "";
      terminalPrint("Terminal cleared.");
      break;

    default:
      terminalPrint("Unknown command: " + cmd);
      terminalPrint("Type help for available commands.");
  }
}

if (commandForm) {
  commandForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const command = commandInput.value;

    runCommand(command);

    commandInput.value = "";
  });
}
