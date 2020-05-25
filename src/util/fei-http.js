/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/19
 * Time: 11:40
 */
import axios from 'axios'

const responseInterceptorSuccess = (response) => {
	return response.data
}

const responseInterceptorError = (error) => {
	throw error
}

const requestInterceptorSuccess = (request) => {
	return request
}

const requestInterceptorError = (error) => {
	throw error
}

const FEI_BASE_URL = ''
const FEI_HTTP = axios.create({
	baseURL: FEI_BASE_URL,
	timeout: 30 * 1000
})

FEI_HTTP.interceptors.response.use(responseInterceptorSuccess, responseInterceptorError)
FEI_HTTP.interceptors.request.use(requestInterceptorSuccess, requestInterceptorError)

export {
	FEI_BASE_URL,
	FEI_HTTP
}

axios.interceptors.response.use(function (response) {
	console.log(response)
	return response
}, function (error) {
	console.log(error.response.status)
	return Promise.reject(error)
})
