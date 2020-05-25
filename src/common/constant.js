/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/19
 * Time: 11:40
 */

const ROUTE_TYPE = {
	ROUTE: 'route',
	REDIRECT: 'redirect'
}

const METHOD_TYPE = {
	GET: 'GET',
	PUT: 'PUT',
	POST: 'POST',
	DELETE: 'DELETE'
}

const PAGE = {
	NUM: 1,
	SIZE: 10
}

const SIDER = {
	GET_SIDER_LIST: '/mock_api/siderlist.json'
}

const ORDER = {
	GET_ORDER_LIST: '/mock_api/orderlist.json'
}

const GOODS = {
	GET_CATEGORYS: '/mock_api/categorylist.json',
	GET_GOODS_LIST: '/mock_api/goodslist.json'
}

const UPLOAD = {
	UPLOAD_FILE: '/mock_api/upload.json'
}

const MEDIA = {
	IMAGE_LIST: '/mock_api/imagelist.json',
	VIDEO_LISE: '/mock_api/videolist.json'
}

export {
	ROUTE_TYPE,
	METHOD_TYPE,
	PAGE,
	SIDER,
	ORDER,
	GOODS,
	UPLOAD,
	MEDIA
}
