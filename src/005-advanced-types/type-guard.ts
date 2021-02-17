function isString(a: unknown): a is string {
    return typeof a === 'string';
}

function parseInput(input: string | number): string {
    if (isString(input)) {
        return input.toString();
    }

    return `${input}`;
}
