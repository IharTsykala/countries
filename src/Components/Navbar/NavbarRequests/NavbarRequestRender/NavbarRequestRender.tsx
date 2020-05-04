import React from "react"
import { Toolbar, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

type NavbarRequestRenderProps = {
  locale: string,
  fontSize: boolean,
  currentRequestId: number,
  inputValue: string,
  handlerDispatchRequest: any,
  handlerInputSearchBox: any,
}

const NavbarRequestRender: React.FunctionComponent<NavbarRequestRenderProps> = ({
  locale,
  fontSize,
  currentRequestId,
  inputValue,
  handlerDispatchRequest,
  handlerInputSearchBox,
}) => {
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

export default NavbarRequestRender
