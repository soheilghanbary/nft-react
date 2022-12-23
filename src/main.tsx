import Layout from "blocks/layout";
import ReactDOM from "react-dom/client";
import "sass/app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </RecoilRoot>
);
