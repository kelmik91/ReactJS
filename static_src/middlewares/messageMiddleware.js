import { SEND_MESSAGE, sendMessage } from './../actions/messageActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.name == 'Name') {
                console.log('Middleware ON!');
                console.log(action);
                setTimeout(() =>
                store.dispatch(sendMessage(action.chatId, 'RobotMiddleware', action.text)),
                1000)
            }
            break;
    
        default:
            break;
    }
    return next(action);
}