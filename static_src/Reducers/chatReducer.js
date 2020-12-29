import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {};


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
