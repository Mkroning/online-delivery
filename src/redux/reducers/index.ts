import { combineReducers } from 'redux'
import { ServiceReducer } from '../reducers/serviceReducer'
import { UserReducer } from './userReducer'

const rootReducer = combineReducers({
  userReducer: UserReducer,
  serviceReducer: ServiceReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
