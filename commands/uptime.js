const startedAt = Date.now();

export default {
    name: "uptime",
    description: "Shows how long RoxyRun has been running",

    execute() {
        const seconds = Math.floor((Date.now() - startedAt) / 1000);

        return {
            success: true,
            message: `RoxyRun uptime: ${seconds}s`
        };
    }
};
