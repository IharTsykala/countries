import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setInfoAboutCountriesInStore,
} from "./Request.action"
import ServiceRequest from "../../../services/service-request"
import { LoadingState } from "../../../shared/constants/user-from-view-mode.enum"
import { setLoadingState } from "../Loading/Loading.actions"

function* getInfoAboutAllCountriesSaga() {
  try {
    yield put(setLoadingState(LoadingState.Loading))
    const listCountries = yield ServiceRequest.getInfoAboutAllCountries()
    yield put(setInfoAboutCountriesInStore(listCountries))
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    if (e === "Not Found") yield put(setLoadingState(LoadingState.NotFound))
    else yield put(setLoadingState(LoadingState.Error))
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByShortNameSaga(actions: any) {
  try {
    yield put(setLoadingState(LoadingState.Loading))
    const listCountries = yield ServiceRequest.getInfoCountryByShortName(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore(listCountries))
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    if (e === "Not Found") yield put(setLoadingState(LoadingState.NotFound))
    else yield put(setLoadingState(LoadingState.Error))
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByFullNameSaga(actions: any) {
  try {
    const listCountries = yield ServiceRequest.getInfoCountryByFullName(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore(listCountries))
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    if (e === "Not Found") yield put(setLoadingState(LoadingState.NotFound))
    else yield put(setLoadingState(LoadingState.Error))
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByCodeSaga(actions: any) {
  try {
    yield put(setLoadingState(LoadingState.Loading))
    const listCountries = yield ServiceRequest.getInfoCountryByCode(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore([listCountries]))
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    if (e === "Not Found") yield put(setLoadingState(LoadingState.NotFound))
    else yield put(setLoadingState(LoadingState.Error))
    yield put(getFailureAction(e))
  }
}

function* getInfoCountryByCurrencySaga(actions: any) {
  try {
    yield put(setLoadingState(LoadingState.Loading))
    const listCountries = yield ServiceRequest.getInfoCountryByCurrency(
      actions.payload
    )
    yield put(setInfoAboutCountriesInStore(listCountries))
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    if (e === "Not Found") {
      yield put(setLoadingState(LoadingState.NotFound))
    } else yield put(setLoadingState(LoadingState.Error))
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
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_CODE,
    getInfoCountryByCodeSaga
  )
  yield takeEvery(
    ActionTypes.GET_INFO_COUNTRY_BY_CURRENCY,
    getInfoCountryByCurrencySaga
  )
}
