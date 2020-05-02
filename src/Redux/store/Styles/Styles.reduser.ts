import { ActionTypes } from "./Styles.action"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  fontSize: boolean;
}

const initialState: State = {
  fontSize: false,
}

export const stylesReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
  case ActionTypes.SET_FONT_SIZE_IN_STORE:
    return { ...state, fontSize: action.payload }
  default:
    return state
  }
}
