import axios from "axios";


const instance = axios.create({
    baseURL: 'http://192.168.1.6:8000'
})

instance.interceptors.request.use(

    async (config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }

);

export default instance;