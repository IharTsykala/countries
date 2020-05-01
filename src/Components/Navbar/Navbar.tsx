import React from "react"
import { AppBar } from "@material-ui/core"
import NavbarRequests from "./NavbarRequests/NavbarRequests"
import NavbarVersion from "./NavbarVersion/NavbarVersion"

type ListRequestsProps = {}

const ListRequests: React.FunctionComponent<ListRequestsProps> = () => {
  return (
    <AppBar className={"header"}>
      <NavbarRequests />
      <NavbarVersion />
    </AppBar>
  )
}

export default ListRequests
