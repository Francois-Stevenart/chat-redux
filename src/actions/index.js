export function setMessages() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}
