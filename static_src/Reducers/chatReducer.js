import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chats: {
        1: {
            messages: [
                { messageId: 0, name: 'User', text: 'message1 0' },
                { messageId: 1, name: 'User', text: 'message1 1' },
                { messageId: 2, name: 'User', text: 'message1 2' },
                { messageId: 3, name: 'User', text: 'message1 3' }]
        },
        2: {
            messages: [
                { messageId: 0, name: 'User', text: 'message2 0' },
                { messageId: 1, name: 'User', text: 'message2 1' },
                { messageId: 2, name: 'User', text: 'message2 2' },
                { messageId: 3, name: 'User', text: 'message2 3' }]
        },
        3: {
            messages: [
                { messageId: 0, name: 'User', text: 'message3 0' },
                { messageId: 1, name: 'User', text: 'message3 1' },
                { messageId: 2, name: 'User', text: 'message3 2' },
                { messageId: 3, name: 'User', text: 'message3 3' }]
        },
    },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {
                    $merge: {
                        [action.chatId]: {
                            messages: [...store.chats[action.chatId].messages, {
                                messageId: store.chats[action.chatId].messages.length + 1,
                                name: action.name,
                                text: action.text
                            }]
                        }
                    }
                },
            });
        }
        default:
            return store;
    }
}
