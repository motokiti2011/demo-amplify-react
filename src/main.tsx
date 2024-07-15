import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'; // 追加する
import "./index.css";
import { AppRoutes } from "./Routes.tsx";
/** local起動でエラーになるため一時的にコメントアウト */
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

/** local起動でエラーになるため一時的にコメントアウト */
Amplify.configure(outputs);

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

