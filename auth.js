export const login = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "account/login/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
};

export const signup = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "account/register/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
};