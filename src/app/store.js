import { configureStore } from "@reduxjs/toolkit";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
    reducer: {
      transactions: transactionsReducer,
    },
  });
  
  export default store;