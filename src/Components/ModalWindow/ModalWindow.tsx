import React from "react"
import { Box } from "@material-ui/core"
import ZoomInIcon from "@material-ui/icons/ZoomIn"
import { setModalValueInReducer } from "../../Redux/store/Modal/Modal.action"
import { connect } from "react-redux"

type ModalWindowProps = {
  locale: string,
  modalValue: boolean,
  countryForModalWindow: {},
  dispatch: any,
}

const ModalWindow: React.FunctionComponent<ModalWindowProps> = ({
  locale,
  modalValue,
  countryForModalWindow,
  dispatch,
}) => {
  return (
    <>
      {modalValue && (
        <Box
          className={"modal__window"}
          onClick={(e) => dispatch(setModalValueInReducer(false))}
        >
          <Box>{JSON.stringify(countryForModalWindow, null, 2)}</Box>
        </Box>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  modalValue: state.modal.modalValue,
  countryForModalWindow: state.request.countryForModalWindow,
})

export default connect(mapStateToProps)(ModalWindow)
