import ReactDOM from "react-dom";

import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";

import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./style/common/Global.styled";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </RecoilRoot>
  </QueryClientProvider>,
  document.getElementById("root") as HTMLElement
);
