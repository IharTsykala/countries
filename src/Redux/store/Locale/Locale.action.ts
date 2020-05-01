import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_LOCALE_IN_REDUCER: "[Locale] Set locale in reducer",
}

export const setLocaleInReducer = (locale: string): Action<string> => ({
  type: ActionTypes.SET_LOCALE_IN_REDUCER,
  payload: locale,
})
