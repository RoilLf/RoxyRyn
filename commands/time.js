export default {
    name: "time",
    description: "Shows the current time",

    execute() {
        return {
            success: true,
            message: new Date().toLocaleTimeString()
        };
    }
};
