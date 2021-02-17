type NewAPIResponse = {
    user: {
        userId: string,
        friendList: {
            count: number,
            friends: { firstName: string, lastName: string }[]
        }
    }
};

type ResponseKeys = keyof NewAPIResponse; // 'user'
type UserKeys = keyof NewAPIResponse['user']; // 'userId' | 'friendList'
type FriendListKeys = keyof NewAPIResponse['user']['friendList']; // 'count' | 'friends'
