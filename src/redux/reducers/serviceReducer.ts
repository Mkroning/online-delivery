import { ServiceAction }  from '../actions'
import { ServiceAvailability, ServiceState } from '../models'

const initialState = {
  availability: {} as ServiceAvailability
}

const ServiceReducer = (state: ServiceState = initialState, action: ServiceAction) => {
  switch(action.type){
    case 'ON_AVAILABILITY':
      return{
        ...state,
        availability: action.payload
      }
    default:
      return state
  }
}

export { ServiceReducer }
