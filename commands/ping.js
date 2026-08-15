export default {
    name: "ping",
    description: "Checks whether RoxyRun is responding",

    execute() {
        return {
            success: true,
            message: "Pong! RoxyRun is online."
        };
    }
};
