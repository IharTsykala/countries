import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "&:before": {
        borderColor: "white",
      },
      "& div": {
        color: "white",
      },
      "&:after": {
        borderColor: "white",
      },
    },
    icon: {
      fill: "white",
    },
  })
)

export default useStyles
