import axios from 'axios';
import { getToken } from '../services/authService'

// export default () => { axios.interceptors.request.use(config => {
//     // perform a task before the request is sent
//     console.log(config)
//    var data=service.checkUser();
//    if(data!=null && data.token !=null){
//      //config.headers.authorization='Bearer ' + data.token;
//      config.headers['Authorization'] = `Bearer ${data.token}`;
//    }
//     return config;
//   }, error => {
//     // handle the error
//     console.log('Errorrr' + error)
//     return Promise.reject(error);
//   });

// }
