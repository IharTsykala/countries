import { combineReducers } from "redux"
import { localeReducer } from "./store/Locale/Locale.reduser"
import { requestReducer } from "./store/Request/Request.reduser"
import { inputReducer } from "./store/Input/Input.reduser"
import { modalReducer } from "./store/Modal/Modal.reduser"

export default combineReducers({
  locale: localeReducer,
  request: requestReducer,
  input: inputReducer,
  modal: modalReducer,
})
