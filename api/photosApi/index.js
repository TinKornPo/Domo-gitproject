import PhotoApi from '../api'

export default class photosApi extends PhotoApi {
    static async getAllBanner() {
        return await this.api.get('/photos',{}).then(({data}) => data)
    }
}