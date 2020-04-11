import React, {useState} from 'react'
import {RouteComponentProps} from "@reach/router";
import {connect} from "react-redux";
import {fetchUsersThunk} from "../redux/thunk/thunk";
import {data} from "../redux/api/api";

interface PropsType extends RouteComponentProps<any> {
    fetchusers:any
}

let SearchComponet:React.FC<PropsType> = (props)=>{
    let [first_name,setfirst_name] = useState('');
    let [last_name,setlast_name] = useState('');
    let fetchUser = (data:any)=>{
        if(!data.first_name || !data.last_name){
            alert("Write in all inputs")
        }
        else{
            props.fetchusers(data)
        }
    }
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-4"><input onChange={(e)=>{setfirst_name(e.target.value)}} type="text" className="input-group"/></div>
                <div className="col-4"><input onChange={(e)=>{setlast_name(e.target.value)}} type="text" className="input-group"/></div>
                <div className="col-3"><button onClick={()=>{fetchUser({first_name:first_name,last_name:last_name})}} className="btn-light">Add</button></div>
            </div>
        </div>
    )
}

let mapStateToProps = (state:any)=>({
})

let mapDispatchToProps:object = {
    fetchusers:fetchUsersThunk,
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchComponet)