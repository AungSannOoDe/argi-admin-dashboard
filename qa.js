export const chatapi=`${process.env.NEXT_PUBLIC_API_URL}chat/`
export const askQuestion = (question, history = []) =>
fetch(`${chatapi}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ question, history }),
});