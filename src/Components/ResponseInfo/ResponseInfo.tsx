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
  CircularProgress,
} from "@material-ui/core"
import { setModalValueInReducer } from "../../Redux/store/Modal/Modal.action"
import { setCountryForModalWindow } from "../../Redux/store/Request/Request.action"

const arrayClues = [
  ["Wait!", "Ожидайте!"],
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
  loading: string,
  dispatch: any,
}

const ResponseInfo: React.FunctionComponent<ResponseInfoProps> = ({
  locale,
  fontSize,
  infoAboutRequestCountry,
  currentRequestId,
  loading,
  dispatch,
}) => {
  return (
    <>
      {(loading === "loading" && (
        <Box component={"div"}>
          <CircularProgress
            color="primary"
            className={"response__info__spinner"}
          />
        </Box>
      )) ||
        (loading === "notFound" && (
          <Typography
            variant={"h4"}
            className={`response__info__not_found ${
              (fontSize && "big_font_size") || "normal_font_size"
            }`}
          >
            {(locale === "En" && "Not found anything on your request") ||
              "Ничего не найдено по вашему запросу"}
          </Typography>
        )) ||
        (loading === "loaded" && (
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
                    className={
                      (fontSize && "big_font_size") || "normal_font_size"
                    }
                    primary={item.name}
                    secondary={
                      (locale === "En" && "Name country") || "Название страны"
                    }
                  />
                  <ListItemText
                    className={
                      (fontSize && "big_font_size") || "normal_font_size"
                    }
                    primary={`${item.alpha2Code} ${item.alpha3Code}`}
                    secondary={
                      (locale === "En" && "Country codes") || "Коды страны"
                    }
                  />
                  <ListItemText
                    className={
                      (fontSize && "big_font_size") || "normal_font_size"
                    }
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
                  className={
                    (fontSize && "big_font_size") || "normal_font_size"
                  }
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
        )) ||
        (loading === "error" && (
          <Typography
            variant="h4"
            className={`response__info__error ${
              (fontSize && "big_font_size") || "normal_font_size"
            }`}
          >
            {(locale === "En" && "Fault in your request") ||
              "Вы отправили некорректный запрос"}
          </Typography>
        ))}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  infoAboutRequestCountry: state.request.infoAboutRequestCountry,
  currentRequestId: state.request.currentRequestId,
  loading: state.loading.loadingState,
})

export default connect(mapStateToProps)(ResponseInfo)
