/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/22
 * Time: 15:18
 */
import {FEI_HTTP} from '../../../../../util/fei-http'
import {METHOD_TYPE, MEDIA} from '../../../../../common/constant'

const getImageList = (params) => {
	return FEI_HTTP({
		url: MEDIA.IMAGE_LIST,
		method: METHOD_TYPE.GET,
		params: params
	})
}

const getVideoList = (params) => {
	return FEI_HTTP({
		url: MEDIA.VIDEO_LISE,
		method: METHOD_TYPE.GET,
		params: params
	})
}

export {
	getImageList,
	getVideoList
}
