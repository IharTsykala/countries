import React from "react"
import { connect } from "react-redux"
import {
  Box,
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core"
import { setModalValueInReducer } from "../../Redux/store/Modal/Modal.action"
import { setCountryForModalWindow } from "../../Redux/store/Request/Request.action"

const arrayClues = [
  [
    "Error application, these must be list all countries",
    "Ошибка приложения, здесь должен быть список всех стран",
  ],
  [
    "Input short name country please and press enter",
    "Введите короткое название страны и нажмите ввод пожалуйста",
  ],
  [
    "Input full name country please and press enter",
    "Введите полное название страны и нажмите ввод пожалуйста",
  ],
  [
    "Input code country please and press enter",
    "Введите код страны и нажмите ввод пожалуйста",
  ],
  [
    "Input currency country please and press enter",
    "Введите валюту страны и нажмите ввод пожалуйста",
  ],
]

type ResponseInfoProps = {
  locale: string,
  fontSize: boolean,
  infoAboutRequestCountry: [],
  currentRequestId: number,
  dispatch: any,
}

const ResponseInfo: React.FunctionComponent<ResponseInfoProps> = ({
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
        <Typography
          variant={"h4"}
          className={(fontSize && "big_font_size") || "normal_font_size"}
        >
          {(locale === "En" && arrayClues[currentRequestId][0]) ||
            arrayClues[currentRequestId][1]}
        </Typography>
      )}
    </List>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  infoAboutRequestCountry: state.request.infoAboutRequestCountry,
  currentRequestId: state.request.currentRequestId,
})

export default connect(mapStateToProps)(ResponseInfo)

// (!currentRequestId && (
//   <ListItem
//     key={index}
//     className={"response__info__container__item"}
//   >
//     <Typography variant="subtitle1">
//       {`${item.name.toUpperCase()};
//                    ${item.alpha2Code} ${item.alpha3Code};
//                    ${item.currencies[0].code}`}
//     </Typography>
//   </ListItem>
// )) ||
