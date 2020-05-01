import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setInfoAboutCountriesInStore,
} from "./Request.action"
import ServiceRequest from "../../../services/service-request"

function* getInfoAboutAllCountriesSaga() {
  try {
    const listCountries = yield ServiceRequest.getInfoAboutAllCountries()

    yield put(setInfoAboutCountriesInStore(listCountries))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByShortNameSaga(actions: any) {
  try {
    const listCountries = yield ServiceRequest.getInfoCountryByShortName(
      actions.payload
    )
    console.log(listCountries)
    yield put(setInfoAboutCountriesInStore(listCountries))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByFullNameSaga(actions: any) {
  try {
    const listCountries = yield ServiceRequest.getInfoCountryByFullName(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore(listCountries))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

// function* getInfoCountryBySomeCodesSaga(actions: any) {
//   try {
//     const listCountries = yield ServiceRequest.getInfoCountryBySomeCodes(
//       actions.payload
//     )
//     yield put(setInfoAboutCountriesInStore(listCountries))
//   } catch (e) {
//     yield put(getFailureAction(e))
//   }
// }

function* getInfoCountryByCodeSaga(actions: any) {
  try {
    const listCountries = yield ServiceRequest.getInfoCountryByCode(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore([listCountries]))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByCurrencySaga(actions: any) {
  try {
    const listCountries = yield ServiceRequest.getInfoCountryByCurrency(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore(listCountries))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* requestSaga() {
  yield takeEvery(
    ActionTypes.GET_INFO_ABOUT_ALL_CONTRIES,
    getInfoAboutAllCountriesSaga
  )
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_SHORT_NAME,
    getInfoCountryByShortNameSaga
  )
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_SHORT_FULL_NAME,
    getInfoCountryByFullNameSaga
  )
  // yield takeEvery(
  //   ActionTypes.GET_INFO_COUNTRY_BY_SOME_CODES,
  //   getInfoCountryBySomeCodesSaga
  // )
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_CODE,
    getInfoCountryByCodeSaga
  )
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_CURRENCY,
    getInfoCountryByCurrencySaga
  )
}
