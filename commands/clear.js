export default {
    name: "clear",
    description: "Clears the RoxyRun terminal",

    execute() {
        return {
            success: true,
            action: "clear"
        };
    }
};
