let InitialState = {
    infoFriend : [
        {name: "Nicholas Grissom", country: "San Francisco, CA", numberFriends: 52, photos: 240, videos: 16},
        {name: "Marina Valentine", country: "Long Island, NY", numberFriends: 52, photos: 240, videos: 16},
        {name: "Nicholas Grissom", country: "San Francisco, CA", numberFriends: 49, photos: 20, videos: 1},
        {name: "Chris Greyson", country: "Austin, TX", numberFriends: 544, photos: 25, videos: 895},
        {name: "Elaine Dreifuss", country: "SNew York, NY", numberFriends: 41, photos: 544, videos: 23},
        {name: "Bruce Peterson", country: "Austin, TX", numberFriends: 114, photos: 133, videos: 41},
        {name: "Carol Summers", country: "Los Angeles, CA", numberFriends: 40, photos: 132, videos: 5},
        {name: "Michael Maximoff", country: "Portland, OR", numberFriends: 58, photos: 304, videos: 19}
    ]
}
const friendsReducer = (state = InitialState) => {
    return state;
}

export default friendsReducer;