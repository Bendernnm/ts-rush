type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
};

type OptionalAccount = {
    [K in keyof Account]?: Account[K]
};

type NullableAccount = {
    [K in keyof Account]: Account[K] | null
};

type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
};

type WritableAccountAgain = {
    -readonly [K in keyof ReadonlyAccount]: ReadonlyAccount[K]
}

type RequiredAccountAgain = {
    [K in keyof OptionalAccount]-?: OptionalAccount[K]
};
