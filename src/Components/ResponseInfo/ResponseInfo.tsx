import React from "react"
import { connect } from "react-redux"
import { Box, Typography, CircularProgress } from "@material-ui/core"
import ListCountries from "./ListCountries/ListCountries"

type ResponseInfoProps = {
  locale: string,
  fontSize: boolean,
  infoAboutRequestCountry: [],
  currentRequestId: number,
  loading: string,
}

const ResponseInfo: React.FunctionComponent<ResponseInfoProps> = ({
  locale,
  fontSize,
  infoAboutRequestCountry,
  currentRequestId,
  loading,
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
          <ListCountries
            locale={locale}
            fontSize={fontSize}
            infoAboutRequestCountry={infoAboutRequestCountry}
            currentRequestId={currentRequestId}
          />
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
