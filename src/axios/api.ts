import axios from 'axios'

export const test = (params: any) => axios.get('/api/list', { params: params })
