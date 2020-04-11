import React from 'react'
import {deleteUserByIDThunk, fetchUsersThunk} from "../redux/thunk/thunk";
import { connect } from 'react-redux';
import {stateType} from "../redux/store";
interface PropType {
    fetchUsersThunk?:any
    deleteUserByIDThunk?:any
    id:string
    first_name:string
    last_name:string
    card_number:string
    card_type:string
}
let RowWithData:React.FC<PropType> = (props)=>{
    let deleteUser = (id:string|number)=>{
        props.deleteUserByIDThunk(id);
    }
    return(
        <div className="row mt-4">
            <div className="col-1">{props.id}</div>
            <div className="col-2">{props.first_name}</div>
            <div className="col-3">{props.last_name}</div>
            <div className="col-2">{props.card_number}</div>
            <div className="col-2">{props.card_type}</div>
            <div className="col-1"><button onClick={()=>{deleteUser(props.id)}}>del</button></div>
        </div>
    )
};
let mapStateToProps = (state:stateType)=>({
})

let mapDispatchToProps:object = {
    fetchUsersThunk ,
    deleteUserByIDThunk
}
export default connect(mapStateToProps,mapDispatchToProps)(RowWithData)