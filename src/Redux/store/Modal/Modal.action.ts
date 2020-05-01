import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_MODAL_VALUE_IN_REDUCER: "[Modal] Set modal value in reducer",
}

export const setModalValueInReducer = (value: boolean): Action<boolean> => ({
  type: ActionTypes.SET_MODAL_VALUE_IN_REDUCER,
  payload: value,
})
