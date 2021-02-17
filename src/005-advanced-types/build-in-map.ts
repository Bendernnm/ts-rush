type FullUser = {
    id: number
    name: string
    image?: string
};

type PartialUser = Partial<FullUser>;
type UserRequiredImage = Required<FullUser>;
type ReadOnlyUser = Readonly<FullUser>;
type MainUserModel = Pick<FullUser, 'id' | 'name'>

const fullUser: FullUser = {
    id: 1, name: 'user'
};

const partialUser: PartialUser = { id: 1 };

const userRequiredImage: UserRequiredImage = { id: 1, name: 'user', image: 'image/link' };

const readOnlyUser: ReadOnlyUser = {
    id: 1, name: 'user'
};

// * TS2540: Cannot assign to 'id' because it is a read-only property
// readOnlyUser.id = 2;

const mainUserModel: MainUserModel = { id: 1, name: 'user' };
