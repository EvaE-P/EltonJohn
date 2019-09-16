import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
//ACTION TYPES

const GET_EVENTS = "GET_EVENTS";
const SINGLE_EVENT = "SINGLE_EVENT";

//ACTION CREATORS
function getEvents(events) {
  const action = {
    type: GET_EVENTS,
    events
  };
  return action;
}
function singleEvent(city) {
  const action = {
    type: SINGLE_EVENT,
    city
  };
  return action;
}
//THUNK CREATOR
export function getEventsThunk() {
  return async dispatch => {
    try {
      const res = await axios.get("/api/home");
      dispatch(getEvents(res.data));
    } catch (err) {
      console.log("can't get events", err);
    }
  };
}
//THUNK CREATOR
export function getCityThunk(name) {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/${name}`);
      dispatch(singleEvent(res.data));
    } catch (err) {
      console.log("can't get city", err);
    }
  };
}

const initialState = {
  events: [],
  city: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.events
      };
    case SINGLE_EVENT:
      return {
        ...state,
        city: action.city
      };
    default:
      return state;
  }
};

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
