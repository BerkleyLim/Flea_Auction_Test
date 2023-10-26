import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sortData from "./action/sortData";
import sortReverseData from "./action/sortReverseData";
import createWebStorage from 'reduxjs-toolkit-persist/lib/storage/createWebStorage';
import { useWindowDimensions } from "react-native";
import { persistReducer } from "reduxjs-toolkit-persist";
import { initialWindowMetrics } from "react-native-safe-area-context";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import AsyncStorage from '@react-native-async-storage/async-storage';

// const AsyncStorage = useAsyncStorage;
// const createNoopStorage = () => {
//   return {
//     getItem(_key: any) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: any, value: any) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: any) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
// typeof window === 'undefined'
//   ? createNoopStorage()
//   : createWebStorage('local');

const reducers = combineReducers({
  sortData:sortData,
  sortReverseData:sortReverseData,
})

const persistConfig = {
  // key:'root',
  key:'persist-store',
  storage:AsyncStorage,
  whitelist:['sortData', 'sortReverseData'] // 특정 reducer만 target하여 state 값 유지
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer:persistedReducer,
  // 다음이 middleware 추가 코드이다.
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;