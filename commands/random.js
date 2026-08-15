export default {
    name: "random",
    description: "Generates a random number",

    execute(min = 1, max = 100) {
        min = Number(min);
        max = Number(max);

        if (!Number.isFinite(min) || !Number.isFinite(max)) {
            return {
                success: false,
                message: "Invalid number range."
            };
        }

        if (min > max) {
            [min, max] = [max, min];
        }

        const result =
            Math.floor(Math.random() * (max - min + 1)) + min;

        return {
            success: true,
            message: String(result)
        };
    }
};
