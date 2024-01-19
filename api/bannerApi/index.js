import BaseApibanner from '../api'

export default class bannerApi extends BaseApibanner {
    static async getAllBanner() {
        return await this.api.get('/albums',{}).then(({data}) => data)
    }
}