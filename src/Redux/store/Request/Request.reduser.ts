import { ActionTypes } from "./Request.action"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentRequestId: number;
  infoAboutRequestCountry: [];
  countryForModalWindow: {};
}

const initialState: State = {
  currentRequestId: 0,
  infoAboutRequestCountry: [],
  countryForModalWindow: {},
}

export const requestReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_REQUEST_ID_IN_STORE:
    return { ...state, currentRequestId: action.payload }
  case ActionTypes.SET_INFO_ABOUT_CONTRIES_IN_STORE:
    return { ...state, infoAboutRequestCountry: action.payload }
  case ActionTypes.SET_COUNTRY_FOR_MODAL_WINDOW:
    return { ...state, countryForModalWindow: action.payload }
  default:
    return state
  }
}
