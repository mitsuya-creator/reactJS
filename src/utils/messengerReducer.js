export function messengerReducer(state, action) {
    switch (action.type) {
        case "selectedReceiver": {
            return {
                ...state,
                selectedId: action.selectedId,
                message: ""
            }
        }
        case "edited_messages": {
            return {
                ...state,
                message: action.message
            }
        }
        default: {
            throw Error("Unknown action")
        }
    }
}
export const initialState = {
    selectedId: 0,
    messages: "Hello"
}