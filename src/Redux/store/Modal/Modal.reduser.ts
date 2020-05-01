import { ActionTypes } from "./Modal.action"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  modalValue: boolean;
}

const initialState: State = {
  modalValue: false,
}

export const modalReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
  case ActionTypes.SET_MODAL_VALUE_IN_REDUCER:
    return { ...state, modalValue: action.payload }
  default:
    return state
  }
}
