import PostApi from '../api'

export default class testApi extends PostApi {
   
    static async getAllBanner() {
        return await this.api.get('/posts',{}).then(({data}) => data)
    }
   
    static async createdData(payload) {
        return await this.api.post(`/posts`,payload).then(({data}) => data)
}
}
