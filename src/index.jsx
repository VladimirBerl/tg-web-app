import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider } from "@/app/context/UserContext";
import { store } from "@/app/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </Provider>
);
