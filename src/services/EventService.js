import axios from 'axios'

const appClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default  {
    getEvents() {
        return appClient.get('/events')
    },
    getEvent(id) {
        return appClient.get('/events/' + id);
    }
}