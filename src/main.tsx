import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./style/common/Global.styled";
import { ReactQueryDevtools } from "react-query/devtools";

import ScrollToTop from "./common/ScrollToTop";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />

        <ScrollToTop />

        <App />

        <ReactQueryDevtools initialIsOpen={true} />
      </RecoilRoot>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
