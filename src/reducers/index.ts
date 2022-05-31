import { combineReducers, compose } from "redux";

const defaultReducer = () => null;

export const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const rootReducers = combineReducers({});

export default rootReducers;
