import Constants from '@/services/constants'
import axios from 'axios'

let constants = new Constants()

class API {
    async getPosts() {
        const res = await axios({
            url: constants.posts,
            method: 'GET',
        })
        return res
    }
    async getComments() {
        const res = await axios({
            url: constants.comments,
            method: 'GET',
        })
        return res
    }
}

export default API
