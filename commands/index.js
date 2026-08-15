import help from "./help.js";
import version from "./version.js";
import about from "./about.js";

const commands = {
    help,
    version,
    about
};

export function getCommand(name) {
    return commands[name.toLowerCase()] || null;
}

export function getCommands() {
    return Object.values(commands);
}

export default commands;
