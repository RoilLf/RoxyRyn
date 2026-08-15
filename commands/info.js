export default {
    name: "info",
    description: "Shows RoxyRun information",

    execute() {
        return {
            success: true,
            app: "RoxyRun",
            version: "1.0.0",
            platform: "Web",
            status: "Online"
        };
    }
};
