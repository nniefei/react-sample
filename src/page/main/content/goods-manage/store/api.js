/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/6
 * Time: 10:42
 */
import {FEI_HTTP} from '../../../../../util/fei-http'
import {METHOD_TYPE, GOODS} from '../../../../../common/constant'

const getCategorys = (params) => {
	return FEI_HTTP({
		url: GOODS.GET_CATEGORYS,
		method: METHOD_TYPE.GET,
		params: params
	})
}

const getGoodsList = (params) => {
	return FEI_HTTP({
		url: GOODS.GET_GOODS_LIST,
		method: METHOD_TYPE.GET,
		params: params
	})
}

export {
	getCategorys,
	getGoodsList
}
