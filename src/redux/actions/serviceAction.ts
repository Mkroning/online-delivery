import axios from 'axios'
import { Address } from 'expo-location'
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils'
import { ServiceAvailability } from '../models'

export interface AvailabilityAction{
  readonly type: 'ON_AVAILABILITY',
  payload: ServiceAvailability
}

export interface ServiceErrorAction{
  readonly type: 'ON_SERVICE_ERROR',
  payload: any,
}

export type ServiceAction = AvailabilityAction | ServiceErrorAction

export const onAvailability = (postCode: string) => {
  return async ( dispatch: Dispatch<ServiceAction>) =>{
    try{

      /*TO-DO
        terminar a url conforme o back end
      */
      const response = await axios.get<ServiceAvailability>(`${BASE_URL}/service/availability/${postCode}`)

      if(!response) {
        dispatch({
          type: 'ON_SERVICE_ERROR',
          payload: 'Availability error'
        })
      } else {
        dispatch({
          type: 'ON_AVAILABILITY',
          payload: response.data
        })
      }
    } catch (error) {
      dispatch({
        type: 'ON_SERVICE_ERROR',
        payload: error
      })
    }
  }
}
