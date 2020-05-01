import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_CURRENT_REQUEST_ID_IN_STORE: "[Request] Set current request id in store",

  GET_INFO_ABOUT_ALL_CONTRIES: "[Request] Get info about all country",
  GET_INFO_COUNTRY_BY_SHORT_NAME: "[Request] Get info country by short name",
  GET_INFO_COUNTRY_BY_SHORT_FULL_NAME:
    "[Request] Get info country by full name",
  // GET_INFO_COUNTRY_BY_SOME_CODES: "[Request] Get info country by some codes",
  GET_INFO_COUNTRY_BY_CODE: "[Request] Get info country by code",
  GET_INFO_COUNTRY_BY_CURRENCY: "[Request] Get info country by currency",
  SET_INFO_ABOUT_CONTRIES_IN_STORE:
    "[Request] Set info about countries in store",

  SET_COUNTRY_FOR_MODAL_WINDOW: '[Request] Set country for modal window',

  GET_FAILURE: "[getFailure] Get failure",
}

export const setCurrentRequestIdInStore = (
  requestId: number
): Action<number> => ({
  type: ActionTypes.SET_CURRENT_REQUEST_ID_IN_STORE,
  payload: requestId,
})

// request on server
export const getInfoAboutAllCountries = (): Action<{}> => ({
  type: ActionTypes.GET_INFO_ABOUT_ALL_CONTRIES,
})

export const getInfoCountryByShortName = (name: string): Action<string> => ({
  type: ActionTypes.GET_INFO_COUNTRY_BY_SHORT_NAME,
  payload: name,
})

export const getInfoCountryByFullName = (name: string): Action<string> => ({
  type: ActionTypes.GET_INFO_COUNTRY_BY_SHORT_FULL_NAME,
  payload: name,
})

// export const getInfoCountryBySomeCodes = (
//   someCodes: string
// ): Action<string> => ({
//   type: ActionTypes.GET_INFO_COUNTRY_BY_SOME_CODES,
//   payload: someCodes,
// })

export const getInfoCountryByCode = (code: string): Action<string> => ({
  type: ActionTypes.GET_INFO_COUNTRY_BY_CODE,
  payload: code,
})

export const getInfoCountryByCurrency = (currency: string): Action<string> => ({
  type: ActionTypes.GET_INFO_COUNTRY_BY_CURRENCY,
  payload: currency,
})

export const setInfoAboutCountriesInStore = (
  listCountries: any
): Action<[]> => ({
  type: ActionTypes.SET_INFO_ABOUT_CONTRIES_IN_STORE,
  payload: listCountries,
})

//ModalWindow

export const setCountryForModalWindow = (
    country: {}
): Action<{}> => ({
  type: ActionTypes.SET_COUNTRY_FOR_MODAL_WINDOW,
  payload: country,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
