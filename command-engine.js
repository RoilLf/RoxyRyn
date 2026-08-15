import commands from "./commands/index.js";

export async function executeCommand(input) {
    const parts = input.trim().split(/\s+/);

    if (!parts[0]) {
        return {
            success: false,
            message: ""
        };
    }

    const name = parts.shift().toLowerCase();
    const command = commands[name];

    if (!command) {
        return {
            success: false,
            message: `Unknown command: ${name}`
        };
    }

    try {
        return await command.execute(...parts);
    } catch (error) {
        return {
            success: false,
            message: `Error: ${error.message}`
        };
    }
}

export function getAvailableCommands() {
    return Object.keys(commands);
}
