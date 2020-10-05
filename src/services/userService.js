import axios from 'axios'

import { userURL, baseURL } from '../config/api'

export const getUsers = () => {
    return axios.get(userURL).then(res => 
        res.data.map(user => {
            user.id=user._id
            return user
        }))
}

export const deleteUser = (id) => {
    return axios.delete(userURL + '/' + id).then(res => res.data)
}

export const getSingleUser = (id) => {
    return axios.get(userURL + '/' + id).then(res => res.data)
}

export const registerUser = (data) => {
    return axios.post(baseURL + '/register',data).then(res => res.data)
}

export const uploadFile = (data) => {
    return axios.post(baseURL + '/upload' , data).then(res => res.data)
    // return axios.post(baseURL + '/upload' , data).then(res => {
    //     //console.log(res.data.profileurl,'API RES')
    //      return res.data.profileurl
    // })
    
}