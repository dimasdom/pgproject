import {getUsersApi, data, deleteUserApi, addUserApi, userdatatype} from "../api/api";
import { fetchUsersAC } from "../actions/actions";

export let fetchUsersThunk = (data:data) => async (dispatch:any)=>{
    let Users = await getUsersApi(data);
    dispatch(fetchUsersAC(Users))
}

export let deleteUserByIDThunk = (id:string|number)=>async (dispatch:any)=>{
    let Users = await  deleteUserApi(id)
    dispatch(fetchUsersAC(Users))
}

export let addUserThunk =(userdata:userdatatype)=>async (dispatch:any)=>{
    let Users = await  addUserApi(userdata);
    dispatch(fetchUsersAC(Users))
}