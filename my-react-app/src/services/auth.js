const TOKEN_KEY = "jwt_token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const isLoggedIn = () => !!getToken();
