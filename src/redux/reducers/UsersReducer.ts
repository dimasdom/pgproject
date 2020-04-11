import {FETCH_USERS} from "../actions/actions";

type userType = [number,string,string,string,number]

export interface initialStateType {
    user:userType | null
}

let initialState:initialStateType = {user:null}

interface actionType {
    type:string
    payload:object
}

let UserReducer = (state:initialStateType = initialState ,action:actionType) =>{
    switch (action.type) {
        case FETCH_USERS : {
            return{
                user:action.payload
            }
        }
        default : return state
    }
};

export default UserReducer