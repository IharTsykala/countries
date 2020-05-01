import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_INPUT_VALUE_IN_REDUCER: "[Input] Set input value in reducer",
}

export const setInputValueInReducer = (value: string): Action<string> => ({
  type: ActionTypes.SET_INPUT_VALUE_IN_REDUCER,
  payload: value,
})
