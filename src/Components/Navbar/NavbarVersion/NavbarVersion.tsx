import React from "react"
import { Toolbar, Button } from "@material-ui/core"
import { connect } from "react-redux"
import NavbarVersionLanguage from "./NavbarVersionLanguage/NavbarVersionLanguage"
import NavbarVersionZoom from "./NavbarVersionZoom/NavbarVersionZoom"

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
      <NavbarVersionZoom fontSize={fontSize} dispatch={dispatch} />
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
