import { ActionTypes } from "./Input.action"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  inputValue: string;
}

const initialState: State = {
  inputValue: "",
}

export const inputReducer = (
  state: State = initialState,
  action: Action<string>
) => {
  switch (action.type) {
  case ActionTypes.SET_INPUT_VALUE_IN_REDUCER:
    return { ...state, inputValue: action.payload }
  default:
    return state
  }
}
