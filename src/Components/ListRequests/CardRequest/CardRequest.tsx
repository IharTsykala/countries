import React, { useEffect } from "react"
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
}

const CardRequest: React.FunctionComponent<CardRequestProps> = ({
  item,
  dispatch,
  locale,
  id,
  currentRequest,
}) => {
  useEffect(() => {}, [])
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
          <Typography variant="button">
            {(locale === "En" && "Name request:") || "Имя запроса:"} {item}
          </Typography>
          {/*<Typography variant="h6">{item}</Typography>*/}
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CardRequest
