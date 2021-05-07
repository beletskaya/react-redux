const ADD_MESSAGE = 'ADD-MESSAGE';

let InitialState = {
    dialogData : [
        {id:1, name:"Vika"},
        {id:2, name:"Vika2"},
        {id:3, name:"Vika3"},
        {id:4, name:"Vika4"}
    ],
    textMessage: '',
    messagesData : [
        {id:1, message:"HI"},
        {id:2, message:"How are you"},
        {id:3, message:"Yo"},
        {id:4, message:"Yo"}
    ]
}
const dialogsReducer = (state = InitialState, action) => {
    //let copyState;

    switch(action.type){
        case ADD_MESSAGE: {
            return{
                ...state,
                messagesData : [...state.messagesData, {message: action.messageText,id: 5}],
                textMessage : " "
            };
            //copyState.messagesData.push({message: state.textMessage, id: 5});
            //copyState.textMessage = "";
            //return copyState;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (messageText) => {
    return{
        type: ADD_MESSAGE, messageText
    }
}
export default dialogsReducer;