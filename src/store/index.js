/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 14:26
 */
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware)
)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
