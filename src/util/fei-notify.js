/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/4
 * Time: 11:01
 */
import { notification } from 'antd'

const info = ({ message = '温馨提示', msg, duration = 3 }) => {
	return notification.info({
		message: message,
		description: msg,
		duration: duration
	})
}

const success = ({ message = '温馨提示', msg, duration = 3 }) => {
	return notification.success({
		message: message,
		description: msg,
		duration: duration
	})
}

const error = ({ message = '温馨提示', msg, duration = 3 }) => {
	return notification.error({
		message: message,
		description: msg,
		duration: duration
	})
}

const warn = ({ message = '温馨提示', msg, duration = 3 }) => {
	return notification.warn({
		message: message,
		description: msg,
		duration: duration
	})
}

export {
	info,
	success,
	error,
	warn
}
