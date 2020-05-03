import { ActionTypes } from "./Loading.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  loadingState: string;
}

const initialState: State = {
  loadingState: "loaded",
}

export const loadingReducer = (
  state: State = initialState,
  action: Action<String>
) => {
  switch (action.type) {
  case ActionTypes.SET_LOADING_STATE:
    return { ...state, loadingState: action.payload }
  default:
    return state
  }
}
