import React, {useEffect} from 'react'
import RowWithData from "./RowWithData";
import {stateType} from "../redux/store";
import {fetchUsersThunk} from "../redux/thunk/thunk";
import {connect} from "react-redux";

let UserComponent:React.FC = (props:any)=>{
    let alertState = ()=>{
        console.table(props.users)
    }
    const useFetch = (someFetchFunction:any)=>{
        useEffect(()=>{
            someFetchFunction()
        },[])
    }
    useFetch(props.fetchusers)
    alertState()
    return(
        <div className="container">
            {   props.users.user ?
                props.users.user.map((u:any)=>{
                return(
                <RowWithData first_name={u.first_name} last_name={u.last_name} card_number={u.card_number} card_type={u.card_type}
                             id={u.id}/>)
            }):"Loading..."
            }
            </div>
    )
}

let mapStateToProps = (state:stateType)=>({
    users:state.Users
})

let mapDispatchToProps:object = {
    fetchusers:fetchUsersThunk,
}

export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);