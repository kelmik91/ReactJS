import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chats: {
        1: {
            messages: [
                { id: 0, name: 'User', text: 'message1 0' },
                { id: 1, name: 'User', text: 'message1 1' },
                { id: 2, name: 'User', text: 'message1 2' },
                { id: 3, name: 'User', text: 'message1 3' }]
        },
        2: {
            messages: [
                { id: 0, name: 'User', text: 'message2 0' },
                { id: 1, name: 'User', text: 'message2 1' },
                { id: 2, name: 'User', text: 'message2 2' },
                { id: 3, name: 'User', text: 'message2 3' }]
        },
        3: {
            messages: [
                { id: 0, name: 'User', text: 'message3 0' },
                { id: 1, name: 'User', text: 'message3 1' },
                { id: 2, name: 'User', text: 'message3 2' },
                { id: 3, name: 'User', text: 'message3 3' }]
        },
    },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {
                    $merge: {
                        [action.id]: {
                            messages:  [...store.chats[action.id].messages, {
                                id: store.chats[action.id].messages.length + 1,
                                name: action.name,
                                text: action.text
                            }]
                        }
                    }
                },
            }, );
        }
        default:
            return store;
    }
}
