export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (chatId, name, text) => ({
   type: SEND_MESSAGE,
   chatId,
   name,
   text,
});
