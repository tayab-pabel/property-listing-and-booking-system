import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAILURE,
} from './../constants/propertyConstants'

export const propertyReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { ...state, loading: true }
    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload }
    case PROPERTY_LIST_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
