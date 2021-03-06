import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import {
  setCurrentRequestIdInStore,
  setInfoAboutCountriesInStore,
} from "../../../Redux/store/Request/Request.action"
import { setLoadingState } from "../../../Redux/store/Loading/Loading.actions"
import { LoadingState } from "../../../shared/constants/user-from-view-mode.enum"

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
            dispatch(setLoadingState(LoadingState.Loaded)) &&
            id !== 0 &&
            dispatch(setInfoAboutCountriesInStore([]))
          }
          className={(fontSize && "big_font_size") || "normal_font_size"}
        >
          <Typography variant="button">
            {(locale === "En" && "Name request:") || "Имя запроса:"}
          </Typography>
          <Typography variant="h4">{item}</Typography>
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CardRequest
