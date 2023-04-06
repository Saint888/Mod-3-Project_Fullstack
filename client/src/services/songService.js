import { customAxios } from './api'

export async function getAllSongs() {

    const axios = customAxios()
    try {
        const response = await axios.get('/music')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}