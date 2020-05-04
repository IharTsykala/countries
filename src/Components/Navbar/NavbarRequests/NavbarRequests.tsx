import React, { useEffect } from "react"
import {
  getInfoAboutAllCountries,
  getInfoCountryByShortName,
  getInfoCountryByFullName,
  getInfoCountryByCode,
  getInfoCountryByCurrency,
} from "../../../Redux/store/Request/Request.action"
import { setInputValueInReducer } from "../../../Redux/store/Input/Input.action"
import { connect } from "react-redux"
import NavbarRequestRender from "./NavbarRequestRender/NavbarRequestRender"

type NavbarRequestsProps = {
  locale: string,
  fontSize: boolean,
  currentRequestId: number,
  inputValue: string,
  dispatch: any,
}

const NavbarRequests: React.FunctionComponent<NavbarRequestsProps> = ({
  locale,
  fontSize,
  currentRequestId,
  inputValue,
  dispatch,
}) => {
  useEffect(() => {
    if (!currentRequestId) dispatch(getInfoAboutAllCountries())
  }, [currentRequestId, dispatch])

  const handlerInputSearchBox = (e: React.ChangeEvent<any>) => {
    dispatch(setInputValueInReducer(e.target.value))
  }

  const handlerDispatchRequest = (e?: React.KeyboardEvent<any>) => {
    if (!e || e.key === "Enter") {
      switch (currentRequestId) {
        case 1:
          dispatch(getInfoCountryByShortName(inputValue))
          break
        case 2:
          dispatch(getInfoCountryByFullName(inputValue))
          break
        case 3:
          dispatch(getInfoCountryByCode(inputValue))
          break
        case 4:
          dispatch(getInfoCountryByCurrency(inputValue))
          break
        default:
          return
      }
      dispatch(setInputValueInReducer(""))
    }
  }

  return (
    <NavbarRequestRender
      locale={locale}
      fontSize={fontSize}
      currentRequestId={currentRequestId}
      inputValue={inputValue}
      handlerDispatchRequest={handlerDispatchRequest}
      handlerInputSearchBox={handlerInputSearchBox}
    />
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  currentRequestId: state.request.currentRequestId,
  inputValue: state.input.inputValue,
})

export default connect(mapStateToProps)(NavbarRequests)
