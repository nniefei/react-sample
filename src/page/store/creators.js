/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 16:30
 */

import * as actionTypes from './constants'

const toggleLoadingFlagAction = (value) => ({
	type: actionTypes.TOGGLE_LOADING_FLAG,
	value: value
})

export {
	toggleLoadingFlagAction
}
