export default {
    name: "about",
    description: "Shows information about RoxyRun",

    execute() {
        return {
            success: true,
            name: "RoxyRun",
            version: "1.0.0",
            description: "A lightweight web-based command runner.",
            status: "Online"
        };
    }
};
