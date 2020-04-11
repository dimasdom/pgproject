import React, {useState} from 'react'
import {RouteComponentProps} from '@reach/router'
import { connect } from 'react-redux';
import {addUserThunk} from "../redux/thunk/thunk";
interface PropsType extends RouteComponentProps<any> {
    addUserThunk:any
}
let AddUser:React.FC<PropsType> =(props)=>{
    let [first_name,setfirst_name] = useState<undefined|string>(undefined);
    let [last_name,setlast_name] = useState<undefined|string>(undefined);
    let [card_type,setcard_type] = useState<undefined|string>(undefined);
    let [card_number,setcard_number] = useState<undefined|number|string>(undefined);

    const addUser = ()=>{
        if(!first_name||!last_name||!card_type||!card_number){
            alert("Write in all inputs")
        }
        else{
            props.addUserThunk({first_name,last_name,card_type,card_number})
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-2"><input onChange={(e)=>{setfirst_name(e.target.value)}} type="text"/></div>
                <div className="col-3"><input onChange={(e)=>{setlast_name(e.target.value)}} type="text"/></div>
                <div className="col-2">
                    <select name="card_type" onChange={(e)=>{setcard_type(e.target.value)}} id="card_type">
                    <option value="mastercard">MasterCard</option>
                    <option value="visa">Visa</option>
                    <option value="diners-club-us-ca">Diners Club US CA</option>
                    <option value="instapayment">Instapayment</option>
                    <option value="china-unionpay">China Unionpay</option>
                    <option value="bankcard">Bankcard</option>
                    <option value="diners-club-carte-blanche">Diners-Club-Carte-Blanche</option>
                    <option value="diners-club-international">Diners-Club-International</option>
                    <option value="laser">Laser</option>
                    <option value="maestro">Maestro</option>
                    <option value="americanexpress">American Express</option>
                    <option value="switch">Switch</option>
                    <option value="jcb">JCB</option>
                    <option value="visa-electron">Visa Electron</option>
                </select>
                </div>
                <div className="col-2"><input onChange={(e)=>{setcard_number(e.target.value)}} type="number"/></div>
                <div className="col-2"><button onClick={()=>{addUser()}} className="btn btn-light">Add</button></div>
            </div>
        </div>
    )
}

let mapStateToProps = (state:any)=>({

})
let mapDispatchToProps = {
    addUserThunk
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser)