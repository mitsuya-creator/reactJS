export function messengerReducer(state, action) {
    switch (action.type) {
        case "selectedReceiver": {
            return {
                ...state,
                selectedId: action.contactId,
            }
        }
        case "edited_messages": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            }
        }
        case "sending_messages": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            }
        }
        default: {
            throw Error("Unknown action")
        }
    }
}
export const initialState = {
    selectedId: 0,
    messages: {}
}