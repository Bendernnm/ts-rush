type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';
type Day = Weekday | Weekend;

// * TS2739: Type '{ Mon: "Tue"; }' is missing the following properties from type 'Record ': Tue, Wed, Thu, Fri
// const nextDay: Record<Weekday, Day> = {
//     Mon: 'Tue',
// };

const nextDay: Record<Weekday, Day> = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
};

console.log(nextDay.Mon);
