import React from "react";
import { Provider } from "react-redux";
import store from "../app/store"; // Adjust the import path as necessary
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// Provide the Redux store to this component using <Provider>
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
};

export default App;
