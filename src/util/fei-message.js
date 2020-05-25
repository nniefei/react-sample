/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/4
 * Time: 10:20
 */
import { message } from 'antd'

const info = ({ msg, duration = 3 }) => {
	message.info(msg, duration)
}

const success = ({ msg, duration = 3 }) => {
	message.success(msg, duration)
}

const error = ({ msg, duration = 3 }) => {
	message.error(msg, duration)
}

const warn = ({ msg, duration = 3 }) => {
	message.warn(msg, duration)
}

const loading = () => {
	console.log('no yet implement...')
}

export {
	info,
	success,
	error,
	warn,
	loading
}

