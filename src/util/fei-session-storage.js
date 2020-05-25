/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/1
 * Time: 14:46
 */
const setSessionStorage = (key, value) => {
	return new Promise(resolve => {
		window.sessionStorage.setItem(key, value)
		resolve(true)
	})
}

const getSessionStorage = (key) => {
	return JSON.parse(window.sessionStorage.getItem(key))
}

const delSessionStorage = (key) => {
	return new Promise(resolve => {
		window.sessionStorage.removeItem(key)
		resolve(true)
	})
}

const clearSessionStorage = () => {
	return new Promise(resolve => {
		window.sessionStorage.clear()
		resolve(true)
	})
}

export {
	setSessionStorage as setSS,
	getSessionStorage as getSS,
	delSessionStorage as delSS,
	clearSessionStorage as clearSS
}
