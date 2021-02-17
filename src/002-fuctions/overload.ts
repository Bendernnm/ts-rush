type Reservation = {
    from: Date
    to?: Date
    destination: string
}

type Reserve = {
    (from: Date, destination: string): Reservation
    (from: Date, to: Date, destination: string): Reservation
};

const simpleReserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
    if (toOrDestination instanceof Date) {
        if (!destination) {
            throw new Error('destination are required');
        }

        return { from, to: toOrDestination, destination };
    }

    return { from, destination: toOrDestination };
};

console.log(simpleReserve(new Date(), 'Kiev'));
