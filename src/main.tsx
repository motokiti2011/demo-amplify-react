import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "./index.css";

import { BrowserRouter } from 'react-router-dom'; // 追加する
import { AppRoutes } from "./Routes.tsx";


Amplify.configure(outputs);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

