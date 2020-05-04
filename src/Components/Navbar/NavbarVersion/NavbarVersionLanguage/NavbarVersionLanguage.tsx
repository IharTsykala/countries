import React, { useEffect } from "react"
import { Select, FormControl, MenuItem } from "@material-ui/core"
import useStyles from "./NavbarMakeStyles"
import { setLocaleInReducer } from "../../../../Redux/store/Locale/Locale.action"

type NavbarVersionLanguageProps = {
  locale: string,
  fontSize: boolean,
  dispatch: any,
}

const NavbarVersionLanguage: React.FunctionComponent<NavbarVersionLanguageProps> = ({
  locale,
  fontSize,
  dispatch,
}) => {
  const classes = useStyles()

  useEffect(() => {
    const localeStorage = localStorage.getItem("locale")
    if (localeStorage) dispatch(setLocaleInReducer(localeStorage))
  }, [dispatch])

  const handleChange = (e: any) => {
    dispatch(setLocaleInReducer(e.target.value))
    localStorage.setItem("locale", e.target.value)
  }

  return (
    <FormControl className={"header__version__container__Language"}>
      <Select
        className={`${classes.select} ${
          (fontSize && "big_font_size") || "normal_font_size"
        }`}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
        value={locale}
        onChange={(e) => handleChange(e)}
      >
        <MenuItem
          className={(fontSize && "big_font_size") || "normal_font_size"}
          value={"En"}
        >
          En
        </MenuItem>
        <MenuItem
          className={(fontSize && "big_font_size") || "normal_font_size"}
          value={"Ru"}
        >
          Ru
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default NavbarVersionLanguage
