/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/13
 * Time: 15:36
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as FeiNotify from '../../util/fei-notify'
import PropType from 'prop-types'
import uploadImg from './api'
import E from 'wangeditor'
import './style.scss'

class FeiWangEditor3 extends Component {

	componentDidMount () {
		this.props.initEditor(this)
		const editorBox = document.querySelector('.fei-editor-box')
		const editorToolBox = editorBox.querySelector('div')
		const fullScreenMenuBox = document.createElement('div')
		const fullScreenMenuBtn = document.createElement('span')
		fullScreenMenuBox.className = 'w-e-menu'
		fullScreenMenuBtn.className = 'anticon-settled anticonquanping _wangEditor_btn_fullscreen'
		fullScreenMenuBtn.onclick = function () {
			if (editorBox.className === 'fullscreen-editor') {
				editorBox.className = ''
				fullScreenMenuBtn.title = '全屏编辑'
			} else {
				editorBox.className = 'fullscreen-editor'
				fullScreenMenuBtn.title = '退出全屏'
			}
		}
		fullScreenMenuBox.appendChild(fullScreenMenuBtn)
		editorToolBox.appendChild(fullScreenMenuBox)
	}

	// 启用编辑器
	enableEditor = () => {
		console.log('=====启用编辑器=====')
		this.feiEditor.$textElem.attr('contenteditable', true)
	}
	// 禁用编辑器
	disableEditor = () => {
		console.log('=====禁用编辑器=====')
		this.feiEditor.$textElem.attr('contenteditable', false)
	}
	// 设置编辑内容
	setEditorContent = (content) => {
		console.log('=====设置编辑器内容=====')
		this.feiEditor.txt.html(content)
	}
	// 获取编辑器内容
	getEditorContent = () => {
		console.log('=====获取编辑器内容=====')
		return this.feiEditor.txt.html()
	}

	render () {
		return (
			<div className="fei-editor-box"/>
		)
	}
}

const dispatch2Props = () => {
	return {
		// 初始化编辑器
		initEditor: (target) => {
			target.feiEditor = new E(document.querySelector('.fei-editor-box'))
			// 配置编辑器
			target.feiEditor.customConfig = {
				zIndex: 1,                     // 编辑区层级
				pasteFilterStyle: false,       // 是否过滤粘贴内容样式
				pasteIgnoreImg: false,         // 是否忽略粘贴内容中图片
				menus: ['head', 'bold', 'fontSize', 'fontName', 'italic', 'underline', 'strikeThrough', 'foreColor', 'backColor', 'link', 'list', 'justify', 'quote', 'emoticon', 'image', 'table', 'video', 'code', 'undo', 'redo'],
				colors: ['#000000','#eeece0','#1c487f','#4d80bf','#c24f4a','#8baa4a','#7b5ba1','#46acc8','#f9963b','#ffffff'],
				uploadImgMaxSize: 3*1024*1024, // 图片大小限制（默认5M）
				uploadImgMaxLength: 5,         // 单次最多可上传的图片数量
				uploadFileName: 'file',        // 在使用formdata.append(name, file)添加图片文件时，自定义第一个参数
				customAlert: function (info) { // 自定义的弹出提示框
					FeiNotify.info({msg: info})
				},
				customUploadImg: function (files, insert) {   // 自定义的图片上传功能
					files.map(file => {
						uploadImg(file).then(res => {
							if (res && res.resouceUrl) {
								insert(res.resouceUrl)
							} else {
								FeiNotify.error({msg: JSON.stringify(res)})
							}
						})
					})
				}
			}
			target.feiEditor.create()
		}
	}
}

FeiWangEditor3.propTypes = {
	initEditor: PropType.func,
	enableEditor: PropType.func,
	disableEditor: PropType.func
}

export default connect(null, dispatch2Props, null, {forwardRef: true})(FeiWangEditor3)
