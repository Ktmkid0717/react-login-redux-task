import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  //   reducer: {
  //     user: userReducer,
  //   },
  reducer: persistedReducer,
});

export default store;
