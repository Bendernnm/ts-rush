type APIResponse = {
    user: {
        userId: string,
        friendList: {
            count: number,
            friends: { firstName: string, lastName: string }[]
        }
    }
};

type APIUser = APIResponse['user'];
type APIFriendList = APIResponse['user']['friendList'];
type APIFriend = APIFriendList['friends'][number]; // for tuples use 0, 1, ...
