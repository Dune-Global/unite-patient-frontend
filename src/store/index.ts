import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import pageReducer from "./reducers/page-reducer";
import authReducer from "./reducers/auth-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pageState: pageReducer,
  authState: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
