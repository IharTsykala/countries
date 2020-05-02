import React, { useEffect } from "react"
import {
  Toolbar,
  Select,
  FormControl,
  MenuItem,
  Button,
} from "@material-ui/core"
import useStyles from "../NavbarMakeStyles"
import ZoomInIcon from "@material-ui/icons/ZoomIn"
import ZoomOutIcon from "@material-ui/icons/ZoomOut"
import { setLocaleInReducer } from "../../../Redux/store/Locale/Locale.action"
import { setFontSizeInStore } from "../../../Redux/store/Styles/Styles.action"
import { connect } from "react-redux"

type NavbarVersionProps = {
  locale: string,
  fontSize: boolean,
  dispatch: any,
}

const NavbarVersion: React.FunctionComponent<NavbarVersionProps> = ({
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
    <Toolbar className={"header__version__container"}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(setFontSizeInStore(!fontSize))}
      >
        {(!fontSize && (
          <ZoomInIcon className={"header__version__container__view"} />
        )) || <ZoomOutIcon className={"header__version__container__view"} />}
      </Button>
      <FormControl className={"header__version__container__Language"}>
        <Select
          className={`${classes.select} ${
            (fontSize && "bigFontSize") || "normalFontSize"
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
            className={(fontSize && "bigFontSize") || "normalFontSize"}
            value={"En"}
          >
            En
          </MenuItem>
          <MenuItem
            className={(fontSize && "bigFontSize") || "normalFontSize"}
            value={"Ru"}
          >
            Ru
          </MenuItem>
        </Select>
      </FormControl>
    </Toolbar>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
})

export default connect(mapStateToProps)(NavbarVersion)
