let objectWithKey: {
    a: string
    b?: number
    [key: number]: string
};

objectWithKey = { a: 'string', 20: '20' };

const keyMap: { [key: string]: string } = {
    's1': 'v1',
    's2': 'v2',
};
