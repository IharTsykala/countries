import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_FONT_SIZE_IN_STORE: "[Modal] Set font size in store",
}

export const setFontSizeInStore = (value: boolean): Action<boolean> => ({
  type: ActionTypes.SET_FONT_SIZE_IN_STORE,
  payload: value,
})
