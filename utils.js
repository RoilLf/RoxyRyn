export function formatOutput(value) {
    if (value === null || value === undefined) {
        return "";
    }

    if (typeof value === "object") {
        return JSON.stringify(value, null, 2);
    }

    return String(value);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getTimestamp() {
    return new Date().toLocaleTimeString();
}
