import React, { useEffect } from "react"
import { Toolbar, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import {
  getInfoAboutAllCountries,
  getInfoCountryByShortName,
  getInfoCountryByFullName,
  // getInfoCountryBySomeCodes,
  getInfoCountryByCode,
  getInfoCountryByCurrency,
} from "../../../Redux/store/Request/Request.action"
import { setInputValueInReducer } from "../../../Redux/store/Input/Input.action"
import { connect } from "react-redux"

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
        // case 3:
        //   dispatch(getInfoCountryBySomeCodes(inputValue))
        //   break
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
    <Toolbar className={"header__request__container"}>
      <SearchIcon
        className={"header__request__container__search_icon"}
        onClick={() => handlerDispatchRequest()}
      />
      <InputBase
        value={inputValue}
        placeholder={
          (!currentRequestId &&
            ((locale === "En" && "Chose request") || "Выберите запрос")) ||
          (locale === "En" && "Input data") ||
          "Введите данные"
        }
        className={`header__request__container__input ${
          (fontSize && "big_font_size") || "normal_font_size"
        }`}
        disabled={(!currentRequestId && true) || false}
        onInput={(e) => handlerInputSearchBox(e)}
        onKeyPress={(e) => handlerDispatchRequest(e)}
      />
    </Toolbar>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  currentRequestId: state.request.currentRequestId,
  inputValue: state.input.inputValue,
})

export default connect(mapStateToProps)(NavbarRequests)
