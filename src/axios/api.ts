import axios from '@/axios/http'

export const login = (params: any) => axios.get('/api/login', { params: params })
