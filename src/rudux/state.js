import { rerenderEntireTree } from "../render";

let state = {
    
    profilePage: {
        posts: [
            {id: 1, message: 'I will kick your ass', likesCount: 11},
            {id: 2, message: 'Dear Aragorn, not all are so obvious', likesCount: 8}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Gendalf'},
            {id: 2, name: 'Arven'},
            {id: 3, name: 'Legolas'},
            {id: 4, name: 'Frodo'},
        ],
    
        messages: [
            {id: 1, message: 'Hi. Where is Frodo? Is he still Alive?'},
            {id: 2, message: 'Hi. Yeah. Seems like he is'},
            {id: 3, message: 'How can we hekp him achive Mordor?'},
            {id: 4, message: "All what we can do for him it's try to take attention of Dark Lord of ourselves"},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;