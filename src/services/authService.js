import axios from 'axios'
import { loginURL } from '../config/api'

/**
 * 
 * @param {username, password} creds 
 */
export const login = creds => {
    
    //  return new Promise((resolve, reject) => {
    //     axios.post(loginURL, creds)
    //     .then(data => {
    //         localStorage.setItem('user', JSON.stringify(data.data))
    //         resolve(data)
    //     })
    //     .catch(err => {
    //         reject({
    //             msg: 'Invalid Creds'
    //         })
    //     })
    // })
    return new Promise((resolve, reject) => {
        const { username, password } = creds

        if (username === 'admin' && password === 'admin') {
            const user = {
                username,
                token: '123abcd1234'
            }
            localStorage.setItem('user', JSON.stringify(user))
            resolve(user)
        } else {
            reject({
                msg: 'Invalid Creds'
            })
        }
    })
}

export const logout = () => {
    localStorage.removeItem('user')
}

export const checkUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export const getToken = () => {
    console.log(JSON.parse(localStorage.getItem('user')));
    const data=JSON.parse(localStorage.getItem('user'));
    if(data!=null)
        return data.token;
    else
        return null;
}