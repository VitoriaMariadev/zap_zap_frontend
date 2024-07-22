//Dados que vão ser armazenado após o login
export const TOKEN_CHAVE = '&app-token';
export const ID_USER = '&id-user';
export const NAME_USER = '&name-user';
export const TYPE_USER = '&status';


export const loginToken = token => { localStorage.setItem(TOKEN_CHAVE,token); }
export const disconnect = () => { localStorage.clear() };

export const setIdUser = id => localStorage.setItem(ID_USER,id);
export const getIdUser = () => localStorage.getItem(ID_USER);

export const setTypeUser = type => localStorage.setItem(TYPE_USER,type);
export const getTypeUser = () => localStorage.getItem(TYPE_USER);

export const setNameUser = name => localStorage.setItem(NAME_USER,name);
export const getNameUser = () => localStorage.getItem(NAME_USER);

export const getToken = () => localStorage.getItem(TOKEN_CHAVE)