export default {
    name: "echo",
    description: "Prints text back to the terminal",

    execute(...args) {
        const text = args.join(" ");

        return {
            success: true,
            message: text || ""
        };
    }
};
