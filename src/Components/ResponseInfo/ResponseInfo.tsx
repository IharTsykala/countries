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
  infoAboutRequestCountry: [],
  currentRequestId: number,
  dispatch: any,
}

const ResponseInfo: React.FunctionComponent<ResponseInfoProps> = ({
  locale,
  infoAboutRequestCountry,
  currentRequestId,
  dispatch,
}) => {
  return (
    <List component={"div"} className={"response__info__container"}>
      {(infoAboutRequestCountry &&
        infoAboutRequestCountry.length > 0 &&
        infoAboutRequestCountry.map(
          (item: any, index: number) =>
            (!currentRequestId && (
              <ListItem
                key={index}
                className={"response__info__container__item"}
              >
                <Typography variant="subtitle1">
                  {`Name country: ${item.name.toUpperCase()};
                   Country codes: ${item.alpha2Code} ${item.alpha3Code};
                   Country currency: ${item.currencies[0].code}`}
                </Typography>
              </ListItem>
            )) || (
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
                <ListItemText primary={item.name} secondary={`Name country`} />
                <ListItemText
                  primary={`${item.alpha2Code} ${item.alpha3Code}`}
                  secondary={`Country codes`}
                />
                <ListItemText
                  primary={item.currencies[0].code}
                  secondary={`Country currency`}
                />
              </ListItem>
            )
        )) || (
        <Box component={"div"}>
          {(locale === "En" && arrayClues[currentRequestId][0]) ||
            arrayClues[currentRequestId][1]}
        </Box>
      )}
    </List>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  infoAboutRequestCountry: state.request.infoAboutRequestCountry,
  currentRequestId: state.request.currentRequestId,
})

export default connect(mapStateToProps)(ResponseInfo)
