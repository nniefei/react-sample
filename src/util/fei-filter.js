/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/28
 * Time: 15:40
 */
import moment from 'moment'

export const priceFilter = (value) => {
	if (value !==0 && value) {
		let price = (value*100).toFixed(0)/100
		if (price.toString().indexOf('.') !== -1) {
			return `￥${price}`
		} else {
			return `￥${price}.00`
		}
	}
}

export const amountFilter = (value) => {
	if (value===0) {return value}
	let newValue=Math.floor(value*100)/100
	let xsd=newValue.toString().split('.')
	if (xsd.length===1){
		newValue=newValue.toString()+'.00'
		return newValue
	}
	if (xsd.length>1){
		if (xsd[1].length<2){
			newValue=newValue.toString()+'0'
		}
		return newValue
	}
}

export const stamp2dateFilter = (value, type) => {
	if (value) {
		switch (type) {
			case 1:
				return moment(value).format('YYYY-MM-DD HH:mm:ss')
			case 2:
				return moment(value).format('YYYY-MM-DD')
			case 3:
				return moment(value).format('YYYY年MM月DD日')
		}
	}
}

export const payTypeFilter = (value) => {
	if (value) {
		switch (value) {
			case '1':
				return '我的余额'
			case '2':
				return '银联'
			case '3':
				return '微信支付'
			case '4':
				return '支付宝'

		}
	}
}

export const dealTypeFilter = (value) => {
	if (value) {
		switch (value) {
			case '1':
				return '交易成功'
			case '2':
				return '交易失败'

		}
	}
}

export const goodsTypeFilter = (value) => {
	if (value) {
		switch (value) {
			case '1':
				return '上架中'
			case '2':
				return '审核中'
			case '3':
				return '下架中'
			case '4':
				return '违规商品'
		}
	}
}
