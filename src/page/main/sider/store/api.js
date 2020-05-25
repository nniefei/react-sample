/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/21
 * Time: 10:33
 */

import { FEI_HTTP } from '../../../../util/fei-http'
import { SIDER, METHOD_TYPE} from '../../../../common/constant'

const getSiderList = () => {
	return FEI_HTTP({
		url: SIDER.GET_SIDER_LIST,
		method: METHOD_TYPE.GET,
		params: {}
	})
}

export {
	getSiderList
}
