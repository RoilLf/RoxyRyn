export default {
    name: "date",
    description: "Shows the current date",

    execute() {
        return {
            success: true,
            message: new Date().toLocaleDateString()
        };
    }
};
