import React from "react"
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core"
import { setModalValueInReducer } from "../../../../Redux/store/Modal/Modal.action"
import { setCountryForModalWindow } from "../../../../Redux/store/Request/Request.action"
import { connect } from "react-redux"

type CardCountriesProps = {
  locale: string,
  fontSize: boolean,
  infoAboutRequestCountry: [],
  item: {},
  index: number,
  dispatch: any,
}

const CardCountries: React.FunctionComponent<CardCountriesProps> = ({
  locale,
  fontSize,
  infoAboutRequestCountry,
  item,
  index,
  dispatch,
}) => {
  return (
    <ListItem
      key={index}
      button
      onClick={() => {
        dispatch(setModalValueInReducer(true)) &&
          dispatch(setCountryForModalWindow(infoAboutRequestCountry[index]))
      }}
      className={"response__info__container__item"}
    >
      <ListItemAvatar>
        <Avatar alt={`Avatar}`} src={item.flag} />
      </ListItemAvatar>
      <ListItemText
        className={(fontSize && "big_font_size") || "normal_font_size"}
        primary={item.name}
        secondary={(locale === "En" && "Name country") || "Название страны"}
      />
      <ListItemText
        className={(fontSize && "big_font_size") || "normal_font_size"}
        primary={`${item.alpha2Code} ${item.alpha3Code}`}
        secondary={(locale === "En" && "Country codes") || "Коды страны"}
      />
      <ListItemText
        className={(fontSize && "big_font_size") || "normal_font_size"}
        primary={item.currencies[0].code}
        secondary={(locale === "En" && "Country currency") || "Валюта страны"}
      />
    </ListItem>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  infoAboutRequestCountry: state.request.infoAboutRequestCountry,
  loading: state.loading.loadingState,
})

export default connect(mapStateToProps)(CardCountries)
