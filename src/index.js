import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { LocaleProvider } from 'antd'
import FeiRoute from './route'
import 'antd/dist/antd.css'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import FeiLoading from './util/fei-loading'

const App = () => (
	<LocaleProvider locale={zhCN}>
		<Provider store={store}>
			<FeiRoute/>
			<FeiLoading/>
			<GlobalStyle/>
		</Provider>
	</LocaleProvider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
