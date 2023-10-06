import qs from 'qs'
import { API_KEY, BASE_URL, BASE_URL_SEARCH } from '../config/apiConfig'
import axios from 'axios'

// Get data
export const getSearchDetails = async(value,media_type) => {
    const url=BASE_URL
    try {
        const params = {
            api_key: API_KEY    
        }
         const dataAxios = axios.create({
            paramsSerializer:params=>qs.stringify(params,{arrayFormat:'repeat'})
         })
        const response = await dataAxios.get(url+`${media_type}/${value}`, {params})
        return response.data
    }
    catch (error) {
        throw error
    }
}

// Search data
export const getSearchResults = async (value,person) => {
    const url = BASE_URL_SEARCH
    try {
        
        const params = {
            query: person,
            api_key: API_KEY
        }
        const config = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzRiZTQzOThkYmNmOWY1NDU1YzA3ZDIyNTFjNTQwNSIsInN1YiI6IjY1MTc0ODU1OTY3Y2M3MDBjNTE4OWM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YX4lxGKJ7rkPtvy0N0qAJVLqvugT7nknOLSTsa0W1Ag'
            },
            params :{
                api_key: API_KEY,
                query: person
            }
        }

        const dataAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })
        
        const response = await dataAxios.get(url + `${value}`, config)
        return response.data.results
    }
    catch (error) {
        throw error
    }
}


