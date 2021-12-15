import axios from 'axios'
import {
  PROPERTY_LIST_FAILURE,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
} from '../constants/propertyConstants'

export const propertyListRequestAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST })
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROPERTY_LIST_FAILURE, payload: 'Something Went Wrong!' })
  }
}
