export default {
    name: "run",
    description: "Runs a registered RoxyRun command",

    async execute(commandName, args = []) {
        if (!commandName) {
            return {
                success: false,
                message: "No command specified."
            };
        }

        const { getCommand } = await import("./index.js");
        const command = getCommand(commandName);

        if (!command) {
            return {
                success: false,
                message: `Unknown command: ${commandName}`
            };
        }

        try {
            return await command.execute(...args);
        } catch (error) {
            return {
                success: false,
                message: "Command failed.",
                error: error.message
            };
        }
    }
};
