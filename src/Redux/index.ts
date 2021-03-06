import { combineReducers } from "redux"
import { localeReducer } from "./store/Locale/Locale.reduser"
import { requestReducer } from "./store/Request/Request.reduser"
import { inputReducer } from "./store/Input/Input.reduser"
import { modalReducer } from "./store/Modal/Modal.reduser"
import { stylesReducer } from "./store/Styles/Styles.reduser"
import { loadingReducer } from "./store/Loading/Loading.reducer"

export default combineReducers({
  locale: localeReducer,
  request: requestReducer,
  input: inputReducer,
  modal: modalReducer,
  styles: stylesReducer,
  loading: loadingReducer,
})
