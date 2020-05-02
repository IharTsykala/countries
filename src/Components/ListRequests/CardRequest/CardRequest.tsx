import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import {
  setCurrentRequestIdInStore,
  setInfoAboutCountriesInStore,
} from "../../../Redux/store/Request/Request.action"

type CardRequestProps = {
  item: string,
  dispatch: any,
  locale: string,
  id: number,
  currentRequest: boolean,
  fontSize: boolean,
}

const CardRequest: React.FunctionComponent<CardRequestProps> = ({
  item,
  dispatch,
  locale,
  id,
  currentRequest,
  fontSize,
}) => {
  return (
    <>
      <ListItem className={`card_request__container`}>
        <Button
          variant={(currentRequest && "contained") || "text"}
          color="primary"
          onClick={() =>
            dispatch(setCurrentRequestIdInStore(id)) &&
            dispatch(setInfoAboutCountriesInStore([]))
          }
        >
          <Typography
            variant="button"
            className={(fontSize && "bigFontSize") || "normalFontSize"}
          >
            {(locale === "En" && "Name request:") || "Имя запроса:"}
          </Typography>
          <Typography
            variant="h6"
            className={(fontSize && "bigFontSize") || "normalFontSize"}
          >
            {item}
          </Typography>
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CardRequest
