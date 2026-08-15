import { executeCommand } from "./command-engine.js";

const input = document.querySelector("#terminal-input");
const output = document.querySelector("#terminal-output");

function print(text) {
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

input?.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;

    const command = input.value.trim();
    if (!command) return;

    print(`$ ${command}`);
    input.value = "";

    const result = await executeCommand(command);

    if (result.message) {
        print(result.message);
    }
});
