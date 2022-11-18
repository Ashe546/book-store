import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookReduser from './books/books';
import catagoryReducer from './categories/categories';

const rootReducer = combineReducers({
    books: bookReduser,
    catagories: catagoryReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;