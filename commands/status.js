export default {
    name: "status",
    description: "Shows the RoxyRun system status",

    execute() {
        return {
            success: true,
            status: "online",
            message: "RoxyRun is running normally."
        };
    }
};
