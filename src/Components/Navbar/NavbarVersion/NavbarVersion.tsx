import React, { useEffect } from "react"
import { Toolbar, Button } from "@material-ui/core"
import ZoomInIcon from "@material-ui/icons/ZoomIn"
import ZoomOutIcon from "@material-ui/icons/ZoomOut"
import { setFontSizeInStore } from "../../../Redux/store/Styles/Styles.action"
import { connect } from "react-redux"
import NavbarVersionLanguage from "./NavbarVersionLanguage/NavbarVersionLanguage"

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
      <NavbarVersionLanguage
        locale={locale}
        fontSize={fontSize}
        dispatch={dispatch}
      />
    </Toolbar>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
})

export default connect(mapStateToProps)(NavbarVersion)
