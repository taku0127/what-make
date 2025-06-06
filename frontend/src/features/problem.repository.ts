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
    },
    async createProduct(id:string, url:string){
        try{
            const res = await axios.post('/api/problem/' + id + '/product', {url});
            return res.data;
        }catch(e){
            throw e;
        }
    },
    async createComment(id:string, comment:string, user_id:number){
        try{
            const res = await axios.post('/api/problem/' + id + '/comment', {comment, user_id});
            return res.data;
        }catch(e){
            console.error('投稿エラー:', e);
        }
    },
    async deleteProduct(id:number){
        try{
            const res = await axios.delete('/api/product/' + id);
            return res.data;
        }catch(e){
            console.log(e)
            throw e;
        }
    },
    async editProduct(id:number, url:string){
        try{
            const res = await axios.patch('/api/product/' + id,{url});
            console.log(res.data);
            return res.data;
        }catch(e){
            console.log(e)
            throw e;
        }
        
    }
}

export default problemRepository;
