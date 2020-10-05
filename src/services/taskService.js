import axios from 'axios'
import { taskURL } from '../config/api'
import { getToken } from './authService'


// (function() {
//     const token = getToken();
//    // console.log('token is ===>' + token)
//     if (token) {
//         axios.defaults.headers.common['Authorization'] ='Bearer ' + token;
//     } else {
//         axios.defaults.headers.common['Authorization'] = null;
//         /*if setting null does not remove `Authorization` header then try     
//           delete axios.defaults.headers.common['Authorization'];
//         */
//     }
//   })();

  
export const getSingleTask = id => {
    return axios.get(taskURL + '/' + id).then(res => res.data)
}


export const getTasks = () => {
    return axios.get(taskURL).then(res => 
        res.data.map((task) => {
            task.id=task._id
            return task
        }))
}


/**
 * 
 * @param {title, description} data 
 */
export const addTask = (data) => {
    data.date = new Date()
    data.completed = false
    return axios.post(taskURL, data).then(res => res.data)
}

export const deleteTask = (id) => {
    return axios.delete(taskURL + '/' + id).then(res => res.data)
}