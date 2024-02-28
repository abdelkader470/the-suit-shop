import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsApiSlice } from "./features/products/productsSlice";
import cartSlice from "./features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//** to save product at local storage
const persistCartConfig = {
  key: "cart",
  storage,
};
const persistedCart = persistReducer(persistCartConfig, cartSlice);

const store = configureStore({
  reducer: {
    cart: persistedCart,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([productsApiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persister = persistStore(store);
export default store;
