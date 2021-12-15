import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { propertyReducer } from './reducers/propertyReducers'

const reducer = combineReducers({ propertyList: propertyReducer })

const initialState = { propertyList: [] }

// Redux Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
