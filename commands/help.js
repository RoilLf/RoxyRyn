export default {
    name: "help",
    description: "Shows available RoxyRun commands",

    execute() {
        return {
            success: true,
            message: [
                "Available commands:",
                "",
                "help     - Show this help",
                "version  - Show RoxyRun version",
                "about    - About RoxyRun",
                "clear    - Clear terminal",
                "echo     - Print text",
                "status   - System status",
                "info     - RoxyRun information",
                "time     - Current time",
                "date     - Current date",
                "random   - Random number"
            ].join("\n")
        };
    }
};
