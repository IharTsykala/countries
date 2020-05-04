import React from "react"
import { Button } from "@material-ui/core"
import ZoomInIcon from "@material-ui/icons/ZoomIn"
import ZoomOutIcon from "@material-ui/icons/ZoomOut"
import { setFontSizeInStore } from "../../../../Redux/store/Styles/Styles.action"

type NavbarVersionZoomProps = {
  fontSize: boolean,
  dispatch: any,
}

const NavbarVersionZoom: React.FunctionComponent<NavbarVersionZoomProps> = ({
  fontSize,
  dispatch,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => dispatch(setFontSizeInStore(!fontSize))}
    >
      {(!fontSize && (
        <ZoomInIcon className={"header__version__container__view"} />
      )) || <ZoomOutIcon className={"header__version__container__view"} />}
    </Button>
  )
}

export default NavbarVersionZoom
