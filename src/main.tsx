import ReactDOM from "react-dom/client";

import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";

import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./style/common/Global.styled";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </RecoilRoot>
  </QueryClientProvider>
);
