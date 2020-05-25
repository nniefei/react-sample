/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/21
 * Time: 10:33
 */

import { FEI_HTTP } from '../../../../../util/fei-http'
import { ORDER, METHOD_TYPE} from '../../../../../common/constant'

const getOrderList = () => {
	return FEI_HTTP({
		url: ORDER.GET_ORDER_LIST,
		method: METHOD_TYPE.GET,
		params: {}
	})
}

export {
	getOrderList
}
