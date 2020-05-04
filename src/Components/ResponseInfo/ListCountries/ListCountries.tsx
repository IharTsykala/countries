import React from "react"
import { Typography, ListItem, List, CircularProgress } from "@material-ui/core"
import arrayClues from "./arrayClues"
import CardCountries from "./CardCountries/CardCountries"

type ListCountriesProps = {
  locale: string,
  fontSize: boolean,
  infoAboutRequestCountry: [],
  currentRequestId: number,
}

const ListCountries: React.FunctionComponent<ListCountriesProps> = ({
  locale,
  fontSize,
  infoAboutRequestCountry,
  currentRequestId,
}) => {
  return (
    <List component={"div"} className={"response__info__container"}>
      {(infoAboutRequestCountry &&
        infoAboutRequestCountry.length > 0 &&
        infoAboutRequestCountry.map((item: any, index: number) => (
          <CardCountries key={index} item={item} index={index} />
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
