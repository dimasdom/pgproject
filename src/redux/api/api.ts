import axios from 'axios'
export interface data {
    first_name?:string,
    last_name?:string
}
export interface userdatatype {
    first_name:string
    last_name:string
    card_type:string
    card_number:number
}
export let getUsersApi = async (data:any)=> {
    if (!data) {

        return axios.get("https://localhost:8980/getusers").then(response => {
            return response.data
        })
    }
    else{
        return axios.get(`https://localhost:8980/getusers/${data.first_name}/${data.last_name}`).then(response => {
            return response.data
        })
    }
}
export let deleteUserApi = async(id:string|number)=>{
    return axios.delete(`https://localhost:8980/delete/${id}`).then(response => {
        return response.data
})
}

export let addUserApi = async (userdata:userdatatype)=>{
    return axios.put("https://localhost:8980/putUser",userdata).then(response => {
        return response.data})
}