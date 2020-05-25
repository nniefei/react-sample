/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/11
 * Time: 11:12
 */

import { FEI_HTTP } from '../../util/fei-http'
import { UPLOAD, METHOD_TYPE} from '../../common/constant'

const uploadImg = (file) => {
	let formFile = new FormData()
	formFile.append('file', file, file.name)
	return FEI_HTTP({
		url: UPLOAD.UPLOAD_FILE,
		method: METHOD_TYPE.POST,
		data: formFile
	})
}

export default uploadImg
