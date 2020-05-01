import React from "react"
import "./App.sass"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./Redux/index"
import requestSaga from "./Redux/store/Request/Request.sagas"
import ModalWindow from "./Components/ModalWindow/ModalWindow"
import Navbar from "./Components/Navbar/Navbar"
import ListRequests from "./Components/ListRequests/ListRequests"
import ResponseInfo from "./Components/ResponseInfo/ResponseInfo"
import Box from "@material-ui/core/Box"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(requestSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <ScopedCssBaseline>
      <Box component="div" className={"wrapper"}>
        <ModalWindow />
        <Navbar />
        <Box component="div" className={"main"}>
          <ListRequests />
          <ResponseInfo />
        </Box>
      </Box>
    </ScopedCssBaseline>
  </Provider>
)

export default App
