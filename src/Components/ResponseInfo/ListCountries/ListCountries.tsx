import React from "react"
import {
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  CircularProgress,
} from "@material-ui/core"
import { setModalValueInReducer } from "../../../Redux/store/Modal/Modal.action"
import { setCountryForModalWindow } from "../../../Redux/store/Request/Request.action"
import arrayClues from "./arrayClues"

type ListCountriesProps = {
  locale: string,
  fontSize: boolean,
  infoAboutRequestCountry: [],
  currentRequestId: number,
  dispatch: any,
}

const ListCountries: React.FunctionComponent<ListCountriesProps> = ({
  locale,
  fontSize,
  infoAboutRequestCountry,
  currentRequestId,
  dispatch,
}) => {
  return (
    <List component={"div"} className={"response__info__container"}>
      {(infoAboutRequestCountry &&
        infoAboutRequestCountry.length > 0 &&
        infoAboutRequestCountry.map((item: any, index: number) => (
          <ListItem
            key={index}
            button
            onClick={() => {
              dispatch(setModalValueInReducer(true)) &&
                dispatch(
                  setCountryForModalWindow(infoAboutRequestCountry[index])
                )
            }}
            className={"response__info__container__item"}
          >
            <ListItemAvatar>
              <Avatar alt={`Avatar}`} src={item.flag} />
            </ListItemAvatar>
            <ListItemText
              className={(fontSize && "big_font_size") || "normal_font_size"}
              primary={item.name}
              secondary={
                (locale === "En" && "Name country") || "Название страны"
              }
            />
            <ListItemText
              className={(fontSize && "big_font_size") || "normal_font_size"}
              primary={`${item.alpha2Code} ${item.alpha3Code}`}
              secondary={(locale === "En" && "Country codes") || "Коды страны"}
            />
            <ListItemText
              className={(fontSize && "big_font_size") || "normal_font_size"}
              primary={item.currencies[0].code}
              secondary={
                (locale === "En" && "Country currency") || "Валюта страны"
              }
            />
          </ListItem>
        ))) || (
        <>
          <Typography
            variant={"h4"}
            className={(fontSize && "big_font_size") || "normal_font_size"}
          >
            {(locale === "En" && arrayClues[currentRequestId][0]) ||
              arrayClues[currentRequestId][1]}
          </Typography>
          {currentRequestId === 0 && (
            <CircularProgress
              color="primary"
              className={"response__info__spinner"}
            />
          )}
        </>
      )}
    </List>
  )
}

export default ListCountries
