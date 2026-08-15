export default {
    name: "version",
    description: "Shows the current RoxyRun version",

    execute() {
        return {
            success: true,
            message: "RoxyRun v1.0.0",
            version: "1.0.0"
        };
    }
};
