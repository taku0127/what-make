import axios from "./axios"

const problemRepository = {
    async getProblems() {
        try{
            const res = await axios.get('/api/top');
            return res.data;
        }catch(e){
            console.error('API取得エラー:', e);
        }
    },
    async getOne(id:string) {
        try{
            const res = await axios.get('/api/problem/' + id);
            return res.data;
        }catch(e){
            console.error('API取得エラー:', e);
        }
    }
}

export default problemRepository;
