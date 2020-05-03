import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_LOADING_STATE: "[Loading] set Loading state",
}

export const setLoadingState = (loadingState: string): Action<string> => ({
  type: ActionTypes.SET_LOADING_STATE,
  payload: loadingState,
})
