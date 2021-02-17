type CompanyId = string & { readonly _: unique symbol };
type UserId = string & { readonly _: unique symbol };
type OrderId = string & { readonly _: unique symbol };

type ID = CompanyId | UserId | OrderId;

function userAPI(id: UserId): UserId {
    return id;
}

function generalAPI(id: ID): ID {
    return id;
}

function toCompanyId(id: string): CompanyId {
    return id as CompanyId;
}

function toUserId(id: string): UserId {
    return id as UserId;
}

function toOrderId(id: string): OrderId {
    return id as OrderId;
}

const _companyId: CompanyId = toCompanyId('id1');
const _userId: UserId = toUserId('#1');
const _orderId: OrderId = toOrderId('0001');

userAPI(_userId);

// * TS2345: Argument of type 'CompanyId' is not assignable to parameter of type 'UserId'.
// * Type 'CompanyId' is not assignable to type '{ readonly _: unique symbol; }'.
// * Types of property '_' are incompatible.
// * Type 'typeof _' is not assignable to type 'typeof _'.
// * Two different types with this name exist, but they are unrelated.
// userAPI(_companyId);

generalAPI(_userId);
generalAPI(_companyId);
generalAPI(_orderId);


