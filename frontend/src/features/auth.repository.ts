import axios from "./axios";

const authRepository = {
    async login(email:string, password:string){
        try {
            // CSRF保護のため事前にクッキーを取得
            await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/api/login', { email, password });
          } catch (error) {
            throw error;
          }
    },
    async getLoginUser(){
        try{
            const response = await axios.get('/api/user');
            return response.data;
        }catch(error){
            throw error;
        }
    },
    async signUp(name:string, email:string, password:string){
        try{
            await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/api/register', { name, email, password });
        }catch(error){
            throw error;
        }
    },
}
export default authRepository;
