import { ActionTypes } from "./Locale.action"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  locale: string;
}

const initialState: State = {
  locale: "En",
}

export const localeReducer = (
  state: State = initialState,
  action: Action<string>
) => {
  switch (action.type) {
  case ActionTypes.SET_LOCALE_IN_REDUCER:
    return { ...state, locale: action.payload }
  default:
    return state
  }
}
