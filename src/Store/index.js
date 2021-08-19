import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import createSagaMiddleware from "@redux-saga";
import rootReducer from "../Reducers";
import rootSaga from "../Sagas";

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? compose(
                applyMiddleware(sagaMiddleWare, promiseMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
            )
            : applyMiddleware(sagaMiddleWare, promiseMiddleware)
    );
    sagaMiddleWare.run(rootSaga);
    return store;
};

export default configureStore;