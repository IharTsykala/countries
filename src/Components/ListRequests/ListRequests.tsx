import React from "react"
import { connect } from "react-redux"
import { List, Box } from "@material-ui/core"
import CardRequest from "./CardRequest/CardRequest"

const arrayRequests = [
  ["all", "все страны"],
  ["name", "краткое имя"],
  ["fullName", "полное имя"],
  // ["listOfCode", "список кодов"],
  ["code", "код страны"],
  ["currency", "валюта страны"],
]

type ListRequestsProps = {
  locale: string,
  currentRequestId: number,
  dispatch: any,
}

const ListRequests: React.FunctionComponent<ListRequestsProps> = ({
  locale,
  currentRequestId,
  dispatch,
}) => {
  return (
    <Box component="div" display="grid" className={"list_request__container"}>
      <List className={"list_request__container__list"}>
        {arrayRequests.map((item: any, index: number) => (
          <CardRequest
            key={index}
            item={(locale === "En" && item[0]) || item[1]}
            dispatch={dispatch}
            locale={locale}
            id={index}
            currentRequest={index === currentRequestId}
          />
        ))}
      </List>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  currentRequestId: state.request.currentRequestId,
})

export default connect(mapStateToProps)(ListRequests)
