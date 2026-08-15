export default {
    name: "reload",
    description: "Reloads the RoxyRun interface",

    execute() {
        window.location.reload();

        return {
            success: true,
            message: "Reloading RoxyRun..."
        };
    }
};
