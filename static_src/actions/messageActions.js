export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (id, name, text) => ({
   type: SEND_MESSAGE,
   id,
   name,
   text,
});
