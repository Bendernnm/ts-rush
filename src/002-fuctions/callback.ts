function functionWithCallback(a: number, b: number, cb: (c: number) => void): number {
    const sum: number = a + b;

    cb(sum); // not show error, cause we don't handle returned value
    // const result: number = cb(sum); // show error cause we don't wait for any response

    return sum;
}

functionWithCallback(1, 2, (c) => c + 1);
