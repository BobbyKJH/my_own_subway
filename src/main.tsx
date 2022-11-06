import ReactDOM from "react-dom/client";

import App from "./App";

import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./style/common/Global.styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
