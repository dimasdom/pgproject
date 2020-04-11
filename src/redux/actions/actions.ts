export const FETCH_USERS:string = "FETCH_USERS";

export const fetchUsersAC = (users:object) =>({type:FETCH_USERS,payload:users});